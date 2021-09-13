$(function () {
    $('.slack-submit').on('click', function () {
    var url = 'https://slack.com/api/chat.postMessage';
        var data = {
            channel: 'C02EX7UQ7CG',
            text: 'Hello Slack!',
        };

        $.ajax({
            type: 'GET',
            url: url,
            data: data,
            headers: {"Authorization": 'Bearer xoxb-510673417077-2483624306034-XzRBtE4Mxs8HaGVNWPip9Q8a'},
            success: function (data) {
                alert( 'Can I post to Slack? :' + data.ok );
            }
        });
    });
});