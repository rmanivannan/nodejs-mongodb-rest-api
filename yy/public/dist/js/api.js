var api = {
	save: function (url,data) {
		data["token"] = window.sessionStorage.token;
		$.ajax({
			url:url,
			data:data,
			success: function () {
				
			}
		})
	}
} 