class Contact extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' })

    }
    connectedCallback() {
        const Tel = this.getAttribute('tel');
        const adress = this.getAttribute('adr');

        this.shadowRoot.innerHTML = `
        <h5> ${Tel}   ${adress} </h5>
        <style> 
         h5{
                color : #104e8b;
                padding-right: 20px
            }
        </style>
          <slot name = 'h5'> </slot>
        
        `
    }

}
window.customElements.define('user-adr', Contact);