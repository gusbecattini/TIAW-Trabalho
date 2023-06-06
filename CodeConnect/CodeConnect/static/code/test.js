(function(){
    $(document).ready(function()
    {
        var button = $("#sendButton");
        button.click(function() {
            $.ajax({
                url: "profile.html",
                type: "GET"
            }).done(function(response){
                $(response).filter("#textarea").val();
                $("#content").append("<br><br><strong>" + text + "</strong>");
            })

        })


    })
})
