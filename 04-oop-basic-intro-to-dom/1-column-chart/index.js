export default class ColumnChart {
    constructor(props={}) {
        ({
            data:           this.data = [],
            label:          this.label = 'orders',
            link:           this.link = '#',
            value:          this.value = 344,
            chartHeight:    this.chartHeight = 50,
        } = props);
        this.render();
        this.initEventListeners();
    }
    
    render() {
        const element = createElementHelper(`
            <div class="column-chart${this.data.length ? ``: 
            ` column-chart_loading`}" style="--chart-height: ${this.chartHeight}">
            </div>`
        );
        this.element = element;
        this.chart = new ColumnChartContainer(
                    {value: this.value, data: this.data}
        );
        this.element.append(new ColumnChartTitle(
                    {label: this.label, link: this.link}
        ).element);
        this.element.append(this.chart.element);
    }
    
    initEventListeners () {
    }

    remove () {
        this.element.remove();
    }
    update(data) {
        this.chart.chartChart.remove();
        this.chart.chartChart = new ColumnChartContainer({data: data}).element;
    }
    destroy() {
        this.remove();
    }
}

class ColumnChartTitle{
    constructor(props={}) {
        ({
            label: this.label = 'orders',
            link: this.link = null
        } = props);
        this.render();
        this.initEventListeners();
    }
    
    render() {
        const element = createElementHelper(
        `<div class="column-chart__title">
            Total ${this.label}
        </div>`)
    
        this.element = element;
        if(this.link)
            this.element.append(new ColumnChartLink({link: this.link}).element);
    }
    
    initEventListeners () {
    }
    
    remove () {
        this.element.remove();
    }
    
    destroy() {
        this.remove();
    }
}

class ColumnChartLink{
    constructor(props={}) {
        ({
            link:       this.link = '#',
            linkText:   this.linkText = `View all`
        } = props);
        this.render();
        this.initEventListeners();
    }
    
    render() {
        
        const element = createElementHelper(`
            <a href="${this.link}" class="column-chart__link">
                ${this.linkText}
            </a>`
        )
        this.element = element;
    }
    
    initEventListeners () {
    }
    
    remove () {
        this.element.remove();
    }
    
    destroy() {
        this.remove();
    }
}

class ColumnChartContainer{
    constructor(props={}) {
        ({
            value: this.value = 0,
            data: this.data = []
        } = props);
        this.render();
        this.initEventListeners();
    }
    
    render() {
        const element = createElementHelper(`<div class="column-chart__container"></div>`);
    
        this.element = element;
        this.chartChart = new ColumnChartChart({data: this.data}).element;
        this.element.append(new ColumnChartHeader({value: this.value}).element);
        this.element.append(this.chartChart);
    }
    
    initEventListeners () {
    }
    
    remove () {
        this.element.remove();
    }
    
    destroy() {
        this.remove();
    }
}

class ColumnChartHeader {
    constructor(props={}) {
        ({
            value: this.value = null,
        } = props);
        this.render();
        this.initEventListeners();
    }
    
    render() {
        const element = createElementHelper(`
            <div data-element="header" class="column-chart__header">
                ${this.value}
            </div>`);
    
        this.element = element;
    }
    
    initEventListeners () {
    }
    
    remove () {
        this.element.remove();
    }
    
    destroy() {
        this.remove();
    }
}

class ColumnChartChart {
    constructor(props={}) {
        ({
            data: this.data = []
        } = props);
        this.render();
        this.initEventListeners();
    }
    
    render() {
        const maxValue = Math.max(...this.data);
        const scale = 50 / maxValue;
        const element = createElementHelper(`
            <div data-element="body" class="column-chart__chart">
            </div>`
        );
        
        this.data.forEach(
            dataUnit => {
                element.append(createElementHelper(`
                    <div style="--value: ${Math.floor(dataUnit * scale)}" 
                        data-tooltip="${(dataUnit / maxValue * 100).toFixed(0)}%">
                    </div>`
                ));
            }
        );

        this.element = element;
    }
    
    initEventListeners () {
    }
    
    remove () {
        this.element.remove();
    }
    
    destroy() {
        this.remove();
    }
}

function createElementHelper(data)
{
    const element = document.createElement('div');
    element.innerHTML = data;
    return element.firstElementChild;
}