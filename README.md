# jp-formula

Have you ever wanted to let users enter mathematical formulas? This WebComponent is for that purpose.

Other than that, this WebComponent can let you input functions or call functions.

# Demo

https://satachito.github.io/jp-formula/

# Usage

```
<style>
jp-formula > input {
;	border:	1px solid red
}
</style>

FORMULA:<br>
<jp-formula id=FORMULA></jp-formula>
<input type=button value=Eval id=EVAL>
<span id=RESULT_FORMULA></span>
<br>
<br>

FUNCTION: @ means argument<br>
<input value=3 id=ARGUMENT style="width: 32px">
<jp-formula id=FUNCTION></jp-formula>
<input type=button value=Apply id=APPLY>
<span id=RESULT_FUNCTION></span>
<br>
<br>

BAD SYNTAX:<br>
<jp-formula id=FORMULA_X></jp-formula>
<input type=button value=Eval id=EVAL_X>
<span id=RESULT_FORMULA_X></span>
<br>
<br>

<script type=module>

import './node_module/@satachito/jp-formula/_.js'

FORMULA.value = '2 * ( 3 + 4 ) / 5'
EVAL.onclick = _ => {
	try {
		RESULT_FORMULA.textContent = FORMULA.Eval()
	} catch ( ex ) {
		alert( 'Not a valid formula' + ex )
	}
}

FUNCTION.value = '@ * 2'
APPLY.onclick = _ => {
	try {
		RESULT_FUNCTION.textContent = FUNCTION.Apply( Number( ARGUMENT.value ) )
	} catch ( ex ) {
		alert( 'Not a valid formula' + ex )
	}
}

FORMULA_X.value = 'abc'
EVAL_X.onclick = _ => {
	try {
		RESULT_FORMULA_X.textContent = FORMULA_X.Eval()
	} catch ( ex ) {
		alert( 'Not a valid formula\n' + ex )
	}
}

</script>
```

# Syntax

Visit our awesome calculator site and see tutorial

https://slip.828.tokyo

https://slip.828.tokyo/Tutorial.html


