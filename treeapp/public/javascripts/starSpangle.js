var overlay;
StarSpangle.prototype = new google.maps.OverlayView();

function StarSpangle(markers, map) {
	this.markers_ = markers || [];
	this.stars_ = [];
	this.setupStars_();
	this.map_ = map;
	this.setMap(this.map_);
}

function Star() {
	this.radius;
	this.div;
	this.canvas;
}

CloudOverlay.prototype.setupStars_ = function() {
	for (var i = 0; i < this.markers_.length; i++) {
		var star = new Star();
		this.stars_.push(star);
	}
	window.alert(this.stars_.length);
}