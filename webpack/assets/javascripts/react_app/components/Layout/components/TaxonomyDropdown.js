import React from 'react';
import PropTypes from 'prop-types';
import NavItem from './NavItem';
import { navigateTo } from '../../../../foreman_navigation';

const TaxonomyDropdown = ({
  taxonomyType,
  currentTaxonomy,
  taxonomies,
  id,
  changeTaxonomy,
  anyTaxonomyText,
  manageTaxonomyText,
  anyTaxonomyURL,
  manageTaxonomyURL,
}) => (
  <NavItem className="dropdown org-switcher" id={id}>
    <a
      href="#"
      className="dropdown-toggle nav-item-iconic"
      data-toggle="dropdown"
    >
      {currentTaxonomy}
      <span className="caret" />
    </a>
    <ul className="dropdown-menu">
      <li className="dropdown-header">{__(taxonomyType)}</li>
      <li>
        <a
          className={`${taxonomyType.toLowerCase()}s_clear`}
          onClick={() => {
            changeTaxonomy(__(anyTaxonomyText));
            navigateTo(anyTaxonomyURL);
          }}
        >
          {__(anyTaxonomyText)}
        </a>
      </li>
      <li>
        <a
          className="manage-menu"
          className={taxonomyType.toLowerCase()}
          href={manageTaxonomyURL}
        >
          {__(manageTaxonomyText)}
        </a>
      </li>
      <li className="divider" />
      {taxonomies.map((taxonomy, i) => (
        <li key={i}>
          <a
            className={`${taxonomyType.toLowerCase()}_menuitem`}
            id={`aid_taxonomy_${taxonomy.title}`}
            onClick={() => {
              changeTaxonomy(taxonomy.title);
              navigateTo(taxonomy.href);
            }}
          >
            {taxonomy.title}
          </a>
        </li>
      ))}
    </ul>
  </NavItem>
);

TaxonomyDropdown.propTypes = {
  taxonomyType: PropTypes.string.isRequired,
  currentTaxonomy: PropTypes.string.isRequired,
  taxonomies: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string,
    href: PropTypes.string.isRequired,
  })).isRequired,
  id: PropTypes.string.isRequired,
  changeTaxonomy: PropTypes.func.isRequired,
  anyTaxonomyText: PropTypes.string.isRequired,
  manageTaxonomyText: PropTypes.string.isRequired,
  anyTaxonomyURL: PropTypes.string.isRequired,
  manageTaxonomyURL: PropTypes.string.isRequired,
};

export default TaxonomyDropdown;
