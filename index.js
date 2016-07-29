var Model - function() {
	this.text = "";
	this.onChange = null;
};

Model.prototype.setText = function(value) {
	this.text = value.toUpperCase();
	if (this.onChange) {
		this.onChange(this.text);
	}
};