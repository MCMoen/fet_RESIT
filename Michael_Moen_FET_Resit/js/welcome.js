$(function () {
    $("#liveToastBtn").click(function () {
        $("#liveToast").toast("show")
        console.log("Clicked")
    })
})


$(function () {
    $("#getGoingBtn").click(function () {
        $.ajax({
            url: 'https://www.boredapi.com/api/activity/',
            success: function (response) {
                console.log(response.activity)
            }
        })
    })
})


//Just tryin to make it work
