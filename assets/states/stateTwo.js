define(['d3'], function(d3) {

    return {
        render: function() {
            console.log('state two');

            var dots = d3.selectAll('.dot').data(this.numbers,function(d) { return d.id});


                dots.transition().delay(function(d,i) {
                    return i / 14 * 500;
                }).attr('cy', function(d) {
                if (d.id % 2 === 0) return 300;
                return 100;
            });

            return this;
        },

        nextOut: function() {
            return this;
        }
    }
})