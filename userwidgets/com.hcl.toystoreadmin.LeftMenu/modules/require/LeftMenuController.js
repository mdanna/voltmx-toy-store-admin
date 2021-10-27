define(function() {
	const SKIN_SELECTED = 'sknFlxMenuSelected';
	const SKIN_UNSELECTED = 'sknFlxMenuUnselected';
	const IMG_SALES_REPORT_SELECTED = 'nav_sales_reports_teal.png';
	const IMG_SALES_REPORT_UNSELECTED = 'nav_sales_reports_grey.png';
	const IMG_TRAFFIC_ANALYSIS_SELECTED = 'nav_traffic_analysis_teal.png';
	const IMG_TRAFFIC_ANALYSIS_UNSELECTED = 'nav_traffic_analysis_grey.png';
	const IMG_STRATEGIES_SELECTED = 'nav_strategies_teal.png';
	const IMG_STRATEGIES_UNSELECTED = 'nav_strategies_grey.png';
	const IMG_LOGOUT_SELECTED = 'nav_logout_teal.png';
	const IMG_LOGOUT_UNSELECTED = 'nav_logout_grey.png';

	return {
		initDone: false,
		
		constructor(baseConfig, layoutConfig, pspConfig) {
			this.view.preShow = () => {
				this.selectSalesReport();
				if(!this.initDone){
					this.view.flxSalesReport.onClick = () => {
						this.selectSalesReport();
					};
					this.view.flxTrafficAnalysis.onClick = () => {
						this.selectTrafficAnalysis();
					};
					this.view.flxStrategies.onClick = () => {
						this.selectStrategies();
					};
					this.view.flxLogout.onClick = () => {
						this.selectLogout();
					};
					this.initDone = true;
				}
				
			};
		},
		//Logic for getters/setters of custom properties
		initGettersSetters() {

		},
		
		selectSalesReport() {
			this.view.flxSalesReport.skin = SKIN_SELECTED;
			this.view.imgSalesReport.src = IMG_SALES_REPORT_SELECTED;
			this.view.flxTrafficAnalysis.skin = SKIN_UNSELECTED;
			this.view.imgTrafficAnalysis.src = IMG_TRAFFIC_ANALYSIS_UNSELECTED;
			this.view.flxStrategies.skin = SKIN_UNSELECTED;
			this.view.imgStrategies.src = IMG_STRATEGIES_UNSELECTED;
			this.view.flxLogout.skin = SKIN_UNSELECTED;
			this.view.imgLogout.src = IMG_LOGOUT_UNSELECTED;
			this.onSelect('SALES_REPORT');
		},
		selectTrafficAnalysis() {
			this.view.flxSalesReport.skin = SKIN_UNSELECTED;
			this.view.imgSalesReport.src = IMG_SALES_REPORT_UNSELECTED;
			this.view.flxTrafficAnalysis.skin = SKIN_SELECTED;
			this.view.imgTrafficAnalysis.src = IMG_TRAFFIC_ANALYSIS_SELECTED;
			this.view.flxStrategies.skin = SKIN_UNSELECTED;
			this.view.imgStrategies.src = IMG_STRATEGIES_UNSELECTED;
			this.view.flxLogout.skin = SKIN_UNSELECTED;
			this.view.imgLogout.src = IMG_LOGOUT_UNSELECTED;
			this.onSelect('TRAFFIC_ANALYSIS');
		},
		selectStrategies() {
			this.view.flxSalesReport.skin = SKIN_UNSELECTED;
			this.view.imgSalesReport.src = IMG_SALES_REPORT_UNSELECTED;
			this.view.flxTrafficAnalysis.skin = SKIN_UNSELECTED;
			this.view.imgTrafficAnalysis.src = IMG_TRAFFIC_ANALYSIS_UNSELECTED;
			this.view.flxStrategies.skin = SKIN_SELECTED;
			this.view.imgStrategies.src = IMG_STRATEGIES_SELECTED;
			this.view.flxLogout.skin = SKIN_UNSELECTED;
			this.view.imgLogout.src = IMG_LOGOUT_UNSELECTED;
			this.onSelect('STRATEGIES');
		},
		selectLogout() {
			this.view.flxSalesReport.skin = SKIN_UNSELECTED;
			this.view.imgSalesReport.src = IMG_SALES_REPORT_UNSELECTED;
			this.view.flxTrafficAnalysis.skin = SKIN_UNSELECTED;
			this.view.imgTrafficAnalysis.src = IMG_TRAFFIC_ANALYSIS_UNSELECTED;
			this.view.flxStrategies.skin = SKIN_UNSELECTED;
			this.view.imgStrategies.src = IMG_STRATEGIES_UNSELECTED;
			this.view.flxLogout.skin = SKIN_SELECTED;
			this.view.imgLogout.src = IMG_LOGOUT_SELECTED;
			this.onSelect('LOGOUT');
		},
		
		onSelect(item){}
	};
});