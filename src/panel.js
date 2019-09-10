import React, { PureComponent, Fragment } from 'react';
import copy from 'copy-to-clipboard';
import { CHANNEL_ID } from './constants';
import { styled } from '@storybook/theming';
import { STORY_CHANGED } from '@storybook/core-events';
import { ActionBar, Form, Placeholder } from '@storybook/components';

import { formatLanguage } from './lanuages';
import Prism from 'prismjs';
import 'prismjs/components/prism-sass';
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-handlebars';
import 'prismjs/components/prism-markup-templating';
import 'prismjs/themes/prism-okaidia.css';

const PanelWrapper = styled.div({
  height: '100%',
  overflow: 'auto',
  width: '100%',
});

const Wrapper = styled.div({
  position: 'relative',
  overflow: 'hidden',
});

const Scroller = styled.div({
  position: 'relative',
  overflow: 'auto',
});

const Pre = styled.pre({
  display: 'flex',
  justifyContent: 'flex-start',
  margin: 0,
});

const Code = styled.code({
  flex: 1,
  paddingRight: 0,
  opacity: 1,
});

class Panel extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      options: [],
      selected: undefined,
    };

    this.channelName = CHANNEL_ID;
    this.onSelectChange = this.onSelectChange.bind(this);
    this.onAddOptions = this.onAddOptions.bind(this);
    this.onCopied = this.onCopied.bind(this);
  }

  componentDidMount() {
    const { channel, api } = this.props;
    this.mounted = true;
    channel.on(this.channelName, this.onAddOptions);

    this.stopListeningOnStory = api.on(STORY_CHANGED, () => {
      if (!this.mounted) {
        this.onAddOptions([]);
      }
    });
  }

  componentDidUpdate() {
    const { channel } = this.props;
    channel.on(this.channelName, this.onAddOptions);
  }

  componentWillUnmount() {
    this.mounted = false;

    if (this.stopListeningOnStory) {
      this.stopListeningOnStory();
    }

    channel.removeListener(this.channelName, this.onAddOptions);
  }

  onCopied() {
    const { selected } = this.state;
    copy(`${selected.code}`);
  }

  onAddOptions(options) {
    const entries =
      Array.isArray(options) &&
      options.length &&
      options.map((option, key) => {
        const lang = Object.keys(option)[0];
        const code = Object.values(option)[0];

        let formatted = undefined;
        if (Prism.languages[lang] && lang && code) {
          formatted = Prism.highlight(code, Prism.languages[lang], lang);
        }

        return {
          key: key,
          label: formatLanguage(lang),
          type: lang,
          code: code,
          formatted: formatted,
        };
      });

    const selected = entries[0];

    this.setState({
      options: entries,
      selected,
    });
  }

  onSelectChange(value) {
    const { options } = this.state;

    const selected = options.filter(option => option.type === value)[0];

    this.setState({ selected });
  }

  render() {
    const { active, context } = this.props;

    const { options, selected } = this.state;

    // no options set
    if (active && !options.length) {
      return (
        <Placeholder>
          <Fragment>No assets found</Fragment>
        </Placeholder>
      );
    }

    return active ? (
      <PanelWrapper>
        <Form.Field label={'Code'}>
          <Form.Select
            onChange={e => {
              this.onSelectChange(e.target.value);
            }}
            size="flex"
          >
            {options &&
              options.length &&
              options.map(({ key, label, type }) => (
                <option key={key} value={type}>
                  {label}
                </option>
              ))}
          </Form.Select>
        </Form.Field>

        {selected && (
          <Wrapper>
            <Scroller>
              <Pre className={`language-${selected.type}`}>
                <Code
                  dangerouslySetInnerHTML={{
                    __html: selected.formatted || selected.code,
                  }}
                />
              </Pre>
            </Scroller>
          </Wrapper>
        )}

        <ActionBar actionItems={[{ title: 'Copy', onClick: this.onCopied }]} />
      </PanelWrapper>
    ) : null;
  }
}

export default Panel;
