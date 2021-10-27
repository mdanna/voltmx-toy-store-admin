define({ 

  onViewCreated() {
    this.view.init = () => {
      
      this.view.flxSalesProductList.removeAll();
      this.view.flxStrategiesProductList.removeAll();
      appData.products.forEach((product, index) => {
        const salesProduct = new com.hcl.toystoreadmin.Product({
          id: `salesProduct${index}`
        }, {}, {});
        salesProduct.num = index + 1 + '';
        salesProduct.img = product.img;
        salesProduct.name = product.name;
        salesProduct.perc = product.perc;
        salesProduct.action = '';
        salesProduct.whenwhere = new Date().toLocaleDateString();
        salesProduct.hoverEnabled = 'no';
        this.view.flxSalesProductList.add(salesProduct);

        const strategiesProduct = new com.hcl.toystoreadmin.Product({
          id: `strategiesProduct${index}`
        }, {}, {});
        strategiesProduct.num = index + 1 + '';
        strategiesProduct.img = product.img;
        strategiesProduct.name = product.name;
        strategiesProduct.perc = product.perc;
        strategiesProduct.action = product.action;
        strategiesProduct.whenwhere = product.where;
        strategiesProduct.hoverEnabled = 'yes';
        this.view.flxStrategiesProductList.add(strategiesProduct);
      });
      
      mEventManager.subscribe(appData.EVENT_PRODUCT_SELECTION, (szIndex) => {
        if(!this.view.flxStrategies.isVisible){
          this.view.cmpLeftMenu.selectStrategies();
        }
        const index = parseInt(szIndex);
        this.view.flxProductTeaserContainer.isVisible = index > 0;
        this.view.imgProductTeaser.src = index > 0 ? appData.products[index - 1].img : '';
        this.view.imgStrategies.src = `strategies_${index}_map.png`;
      });

      this.view.flxProductTeaserDelete.onClick = () => {
        mEventManager.publish(appData.EVENT_PRODUCT_SELECTION, '0');
      };

      this.view.cmpLeftMenu.onSelect = (item) => {
        switch(item){
          case 'SALES_REPORT':
            this.view.lblTitle.text = 'Sales Report';
            this.view.flxSalesReport.isVisible = true;
            this.view.flxTrafficAnalysis.isVisible = false;
            this.view.flxStrategies.isVisible = false;
            break;
          case 'TRAFFIC_ANALYSIS':
            this.view.lblTitle.text = 'Traffic Analysis';
            this.view.flxSalesReport.isVisible = false;
            this.view.flxTrafficAnalysis.isVisible = true;
            this.view.flxStrategies.isVisible = false;
            break;
          case 'STRATEGIES':
            this.view.lblTitle.text = 'Strategies';
            this.view.flxSalesReport.isVisible = false;
            this.view.flxTrafficAnalysis.isVisible = false;
            this.view.flxStrategies.isVisible = true;
            break;
          case 'LOGOUT':
            this.view.flxLogout.isVisible = true;
            break;
          default:
            break;
        }
      };

      this.view.flxLogout.onClick = () => this.view.flxLogout.isVisible = false;

      this.view.flxButtonCancel.onClick = () => this.view.flxLogout.isVisible = false;

      this.view.flxButtonLogout.onClick = () => {
        this.view.flxLogout.isVisible = false;
        new voltmx.mvc.Navigation('frmLogin').navigate();
      };

      this.view.dropdownTime.onOptionSelected = (option) => {
        switch(option){
          case 'Current Year Q1':
          case 'Current Year Q3':
            this.view.imgGraph.src = 'sales_report_01_graph.png';
            this.view.imgTrends.src = 'sales_report_01_trends.png';
            break;
          default:
            this.view.imgGraph.src = 'sales_report_02_graph.png';
            this.view.imgTrends.src = 'sales_report_02_trends.png';
            break;
        }
      };

      this.view.dropdownStore.onOptionSelected = (option) => {
        switch(option){
          case 'Store #1234, Austin, TX':
            this.view.imgTrafficChange.src = 'traffic_analysis_01_pie_chart.png';
            this.view.imgTrafficAisle.src = 'traffic_analysis_01_bar_chart.png';
            this.view.imgTraffic.src = 'traffic_analysis_01_map_all.png';
            break;
          default:
            this.view.imgTrafficChange.src = 'traffic_analysis_02_pie_chart.png';
            this.view.imgTrafficAisle.src = 'traffic_analysis_02_bar_chart.png';
            this.view.imgTraffic.src = 'traffic_analysis_02_map_all.png';
            break;
        }
      };
    };

    this.view.preShow = () => {
      this.view.flxLogout.isVisible = false;
      this.view.cmpSimpleHeader.setUser(voltmx.store.getItem('USERNAME'));
    };
  }
});