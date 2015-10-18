define(['d3'],function(d3) {

    return {
        render: function() {
            console.log('state one');

            var svg = d3.select('#chart');
            var dots = svg.selectAll('.dot').data(this.numbers, function(d) {
                return d.id;
            });

            dots.enter().append('circle')
                .attr('class','dot')
                .attr('cx',function(d) { return d.id * 20 + 10})
                .attr('cy',-300);

            dots.transition().delay(function(d,i) {
                return i / 14 * 500
            }).attr('cx',function(d) { return d.id * 20 + 10})
                .attr('cy',200)
                .attr('r',3)
                .style({
                    fill:"whitesmoke",
                    stroke: 'black'
                });

            dots.exit().transition().delay(function(d,i) {
                return i / 14 * 500;
            }).attr('r',0);

            return this;
            //console.log(this.numbers)
        },

        nextOut: function() {
            this.numbers.pop();
            var dots = d3.selectAll('.dot').data(this.numbers,function(d){ return d.id });
            dots.exit().transition().delay(function(d,i) {
                return i / 14 * 500;
            }).attr('r',0);

            return this;
        },

        prevIn: function() {
            return this;
        },

        nextIn: function() {
            if (this.numbers.length !== 14) {
                this.numbers.push({id:13})
            }
            return this;
        }
    }
})