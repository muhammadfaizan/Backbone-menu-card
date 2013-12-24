var AppRouter = Backbone.Router.extend({
	routes: {
		"": "list",
		"menu-items/new": "itemForm",
		"menu-items/:item": "itemDetails",
		"orders/:item": "orderItem"
	},

	initialize: function  () {
		this.menuItems = new MenuItems();
		this.menuItems.fetch();

		this.orderedItems = new MenuItems();

		this.ordersView = new OrdersView({collection: this.orderedItems});

		this.menuItemModel = new MenuItem();
		this.menuItemView = new MenuItemDetails(
			{
				model: this.menuItemModel
			}
		);

		this.menuView = new MenuView({collection: this.menuItems});
	},

	list: function () {
		$('#app').html(this.menuView.render().el);
	},

	itemDetails: function (item) {
		this.menuItemView.model = this.menuItems.get(item);
		$('#app').html(this.menuItemView.render().el);
	},

	orderItem: function (item) {
		var menuItem = this.menuItems.get(item);
		this.orderedItems.add(menuItem);

		$('#app').html(this.ordersView.render().el);
	},

	itemForm: function () {
		$('#app').html('New item form');
	}
});

var app = new AppRouter();

$(function() {
	Backbone.history.start();
});