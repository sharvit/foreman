import React from 'react';
import Breadcrumbs from './components/Breadcrumb';
import Switcher from './components/BreadcrumbSwitcher';
import API from '../../API';
import Helpers from '../../common/helpers';

class BreadcrumbBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { menu: [], resurceItems: [], switchable: true };
  }
  componentDidMount() {
    const { data: { reosurceUrl, name, menu, resource, action } } = this.props;
    API.get(reosurceUrl).then(({ data }) => {
      const newData = data.results.map(res => ({ name: res[name], url: Helpers.urlBuilder(resource, action, res.id) }));
      this.setState({ resurceItems: newData });
    });
    this.setState({ menu });
  }

  render() {
    const { menu, resurceItems } = this.state;
    return (
      <div>
        <Breadcrumbs data={{ menu }} >
        {this.state.switchable &&
        <Switcher resources={resurceItems} />
        }
        </Breadcrumbs>
        <hr className="breadcrumb-line" />
      </div>
    );
  }
}

export default BreadcrumbBar;
