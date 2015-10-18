require.config({
    paths: {
        d3: 'vender/d3.min',
        jquery: 'vender/jquery.min'
    }
})
requirejs(['d3','vender/d3-state-handler','jquery','states/stateOne','states/stateTwo'],
    function(d3,StateHandler,$,one,two){
        var svg = d3.select("body").append('svg').attr('width',900).attr('height',560).attr('id','chart');
        var states = StateHandler(
            {
                loop: true,
                data: {
                    numbers: d3.range(14).map(function(d) {
                        return {
                            id: d
                        }
                    })
            }
            });
        states.add(one);
        states.add(two);
        states.start();
        $('#next').on('click',function() {
            states.next();
        });
        $('#prev').on('click',function() {
            states.prev();
        });
});