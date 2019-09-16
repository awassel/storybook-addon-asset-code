export default {
    name: 'button',
  
    data() {
      return {
        buttonStyles: {
            backgroundColor: 'transparent',
            border: '1px solid #000',
            borderRadius: '5px',
            color: '#000',
            cursor: 'pointer',
            display: 'inline-block',
            fontSize: '16px',
            fontWeight: '400',
            lineHeight: '1.6',
            textAlign: 'center',
            userSelect: 'none',
            verticalAlign: 'middle',
        },
      };
    },
  
    template: `
      <button :style="buttonStyles">
        <slot>Hello Button</slot>
      </button>
    `,
  };
  