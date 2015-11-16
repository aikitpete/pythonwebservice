//define(['jquery'], function($) {
	function callWhenReady(selector, callback, scope, params) {
		if ($(selector).closest('body').length) {
			callback.call(scope, params);
		}
		else {
			setTimeout(function() {
				callWhenReady(selector, callback, scope, params);
			}, 1);
		}
	}

	function sanitizeData(jsonArray) {
		var newKey;
		jsonArray.forEach(function(item) {
			for (key in item) {
				newKey = key.replace(/\s/g, '').replace(/\./g, '');
				if (key != newKey) {
					item[newKey] = item[key];
					delete item[key];
				}
			}
		})
		return jsonArray;
	}
	//remove whitespace and dots from data : <propName> references
	function sanitizeColumns(jsonArray) {
		var dataProp = [];
		jsonArray.forEach(function(item) {
			dataProp = item['data'].replace(/\s/g, '').replace(/\./g, '');
			item['data'] = dataProp;
		})
		return jsonArray;
	}
//});