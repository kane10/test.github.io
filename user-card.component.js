/**
 * Ici nous allons créer notre composant user-card
 */
class UserCardElement extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' })
    }

    connectedCallback() {
        const firstName = this.getAttribute('first-name');
        const lastname = this.getAttribute('last-name');
        const avatarUrdl = this.getAttribute('avatar');

        this.shadowRoot.innerHTML = `
        <style>
            img {
                width: 200px;
                height: 200px;
                border-radius: 60%
            }
            h2 {
                color: green
            }

            ::slotted(a){
                color : red;
                padding-right: 20px
            }
        </style>
        <img src = "${avatarUrdl}">
        <div id = "link" > 
             <slot name = 'link'> </slot>
        </div>
       
        <h2> ${firstName} ${lastname} </h2>
        <slot name = 'description'> </slot>
       
        `;
    }

}
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
window.customElements.define('user-card', UserCardElement);
