import React from 'react';
import Breadcrumbs from './components/Breadcrumb';
import Switcher from './components/BreadcrumbSwitcher';
import API from '../../API';

class BreadcrumbBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { menu: [], resurceItems: [], switchable: false };
  }
  componentDidMount() {
    const {
      data: { reosurceUrl, name, menu, switcherItemUrl, switchable }
    } = this.props;
    if (reosurceUrl) {
      API.get(reosurceUrl).then(({ data }) => {
        const newData = Object.values(data.results).map(res => ({
          name: res[name],
          url: switcherItemUrl.replace(':id', res.id),
        }));
        this.setState({ resurceItems: newData });
      });
    }
    this.setState({ menu });
    this.setState({ switchable });
  }

  render() {
    const { menu, resurceItems } = this.state;
    return (
      <div>
        <Breadcrumbs data={{ menu }}>
          {this.props.data.swichable && <Switcher resources={resurceItems} />}
        </Breadcrumbs>
        <hr className="breadcrumb-line" />
      </div>
    );
  }
}

export default BreadcrumbBar;
