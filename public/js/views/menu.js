var MenuView = Backbone.View.extend({

	template: Handlebars.compile(
		'<ul>' +
		'{{#each models}}<li><a href="#/orders/{{attributes.id}}">{{attributes.name}}</a></li>{{/each}}' +
		'</ul>'
	),

	initialize: function  () {
		this.listenTo(this.collection, "reset", this.render);
		this.listenTo(this.collection, "add", this.render);
		this.listenTo(this.collection, "remove", this.render);
	},

	render: function () {
		this.$el.html(this.template(this.collection));
		return this;
	}

});