import { NewContext, Eval, Sugared } from './node_modules/@satachito/slip/_.js'

customElements.define(
	'jp-formula'
,	class extends HTMLElement {
		connectedCallback() {
			this.input = document.createElement( 'input' )
			this.appendChild( this.input )
		}
		Eval() {
			if ( this.input.value ) return Eval( 
				NewContext()
			,	Sugared( this.input.value.replaceAll( '*', '×' ).replaceAll( '/', '÷' ) )
			).string()
		}
		Apply( _ ) {
			if ( this.input.value ) return Eval( 
				NewContext()
			,	Sugared( _ + ':\'(' + this.input.value.replaceAll( '*', '×' ).replaceAll( '/', '÷' ) + ')' )
			).string()
		}
		set value( value ) {
			this.input.value = value
		}
	}
)

