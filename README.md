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
<br>
<br>

FUNCTION: @ means argument<br>
<input value=3 id=ARGUMENT style="width: 32px">
<jp-formula id=FUNCTION></jp-formula>
<input type=button value=Apply id=APPLY>
<br>

FORMULA.value = '2 * ( 3 + 4 ) / 5'
EVAL.onclick = _ => alert( FORMULA.Eval() )

FUNCTION.value = '@ * 2'
APPLY.onclick = _ => alert( FUNCTION.Apply( Number( ARGUMENT.value ) ) )

</script>
```
