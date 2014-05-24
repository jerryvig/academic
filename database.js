var Database = function (name) {
	this.name = name;

	var collections = {};

	this.getCollections = function () {
		return collections;
	};
};

Database.prototype.addCollection = function (name) {
	var collections = this.getCollections();
	collections[name] = {};
};

var Collection = function (_name) {
	var name = _name;
	var data = {};
	this.dataIndex = 0;

	this.getName = function () {
		return name;
	};

	this.getData = function () {
		return data;
	};
};

Collection.prototype.insert = function (obj) {
	var data = this.getData();
	data[this.dataIndex] = obj;
	this.dataIndex++;
};

Collection.prototype.find = function (query) {
	var data = this.getData(),
		result = {},
		resultCount = 0;

	/*  query = {'age':32}; 
		query = {'name':'Jerry'}
	*/
	for (var key in data) {
		for (var queryKey in query) {
			if (data[key][queryKey] === query[queryKey]) {
				result[resultCount] = data[key];
				resultCount++;
			}
		}
	}

	return result;
};