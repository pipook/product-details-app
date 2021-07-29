import { Component } from 'react';
import classes from './App.module.css';

import ProductData from './Utils/ProductData';
import Topbar from './Topbar/Topbar';
import ProductPreview from './ProductPreview/ProductPreview';
import ProductDetails from './ProductDetails/ProductDetails';

class App extends Component {
  state = {
    productData: ProductData,
    currenPreviewImagePos: 0,
    showHeartBeatSection: 0
  }
  onColorOptionClick = (pos) => {
    this.setState({currenPreviewImagePos: pos});
  }
  onFeatureItemClick = (pos) => {
    this.setState({showHeartBeatSection: pos});
  }
  render() {
    return (
      <div className="App">
        <Topbar />
        
        <div className={classes.MainContainer}>
          <div className={classes.ProductPreview}>
            <ProductPreview currenPreviewImage={this.state.productData.colorOptions[this.state.currenPreviewImagePos].imageUrl} showHeartBeatSection={this.state.showHeartBeatSection} />
          </div>

          <div className={classes.ProductData}>
            <ProductDetails data={this.state.productData} onColorOptionClick={this.onColorOptionClick} currenPreviewImagePos={this.state.currenPreviewImagePos} onFeatureItemClick={this.onFeatureItemClick} showHeartBeatSection={this.state.showHeartBeatSection} />
          </div>
        </div>
      </div>
    );
  }
}
export default App;