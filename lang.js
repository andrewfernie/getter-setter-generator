module.exports ={

    java: {
        getter: `
\nindentSizepublic variableType getvariableNameUp() {
indentSize\treturn this.variableName;
indentSize}`, 
        setter: `
indentSizepublic void setvariableNameUp(variableType variableName) {
indentSize\tthis.variableName = variableName;
indentSize}
`
    },
    php: {
        getter: `
\nindentSize/**
indentSize * Getter for variableNameUp
indentSize *
indentSize * @return [type]
indentSize */
indentSizepublic function getvariableNameUp()
indentSize{
indentSize    return $this->variableName;
indentSize}`,
        setter: `
\nindentSize/**
indentSize * Setter for variableNameUp
indentSize * @var [type] variableName
indentSize *
indentSize * @return self
indentSize */
indentSizepublic function setvariableNameUp($variableName)
indentSize{
indentSize    $this->variableName = $variableName;
indentSize    return $this;
indentSize}
`
    },
    python: {
        getter: 
`\nindentSize@property\nindentSizedef variableName(self):
indentSize\treturn self.__variableName
indentSize`,
        setter: 
`\nindentSize@variableName.setter\nindentSizedef variableName(self, val) :
indentSize\tself.__variableName = val
`
    },
    cpp: {
        getter: `
\nindentSizevariableType getvariableNameUp() {
indentSize\treturn this->variableName;
indentSize}`,
        setter: `
indentSizevoid setvariableNameUp(variableType variableName) {
indentSize\tthis->variableName = variableName;
indentSize}
`
    },
    javascript: {
        getter: `
\nindentSizefunction getvariableNameUp() {
indentSize\treturn this.variableName;
indentSize}`,
        setter: `
\nindentSizesetvariableNameUp(variableName) {
indentSize\tthis.variableName = variableName;
indentSize}`
    },
    typescript: {
        getter: `
\nindentSizegetvariableNameUp() {
indentSize\treturn this.variableName;
indentSize}`,
        setter: `
\nindentSizesetvariableNameUp(variableName) {
indentSize\tthis.variableName = variableName;
indentSize}`
    }
}