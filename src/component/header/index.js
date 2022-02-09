import olxImage from "../../assets/OLX_2019.svg.png";
import { styles } from "./style";
import searchIcon from "../../assets/search-interface-symbol.png";
import whiteSearchIcon from "../../assets/search.png";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownItem,
  NavbarText,
  DropdownMenu,
  Container,
  Row,
  Col,
} from "reactstrap";
import sellImage from "./../../assets/sell image.jpg";
import { Link } from "react-router-dom";
// import dairyMilk from "../../assets/dairymilk.jpg";
function Header() {
  return (
    <div>
      <Container>
        <Row style={styles.headerBackgroundColor}>
          <Col md="2" style={styles.headerDiv}>
            <div>
              <a href="">
                <img src={olxImage} alt="logoImage" style={styles.logoImage} />
              </a>
            </div>
            <div>
              <a href="https://www.olx.com.pk/mall/" style={styles.mallStyle}>
                MALL
              </a>
            </div>
            <div>
              <a href="https://www.olx.com.pk/motors/" style={styles.mallStyle}>
                MOTORS
              </a>
            </div>
            <div>
              <a
                href="https://www.olx.com.pk/properties/"
                style={styles.mallStyle}
              >
                PROPERTY
              </a>
            </div>
          </Col>
        </Row>
        <Row style={styles.headerBackgroundColor}>
          <Col md="3" style={styles.flexSearchDisplay}>
            <div>
              <img
                src={searchIcon}
                alt="searchIcon"
                style={styles.searchIcon}
              />
            </div>
            <div style={styles.flexCarSearchBar}>
              <div>
                <input
                  type="text"
                  placeholder="search city, area or locality"
                  value="Pakistan"
                  style={styles.searchBar}
                ></input>
              </div>
            </div>
          </Col>
          <Col md="7" style={styles.blackWhiteIcon}>
            <div>
              <input
                type="text"
                placeholder="Find cars,Mobile Phone and more.."
                style={styles.carSearch}
              />
            </div>
            <div style={styles.searchDivIcon}>
              <img
                src={whiteSearchIcon}
                alt="searchIcon"
                style={styles.whiteSearchIcon}
              />
            </div>
          </Col>
          <Col md="2" style={styles.sellLoginButton}>
            <Link to={"/LogInForm"}>
              <div>
                <a href="">
                  <h5 style={styles.loginAnchor}>Login</h5>
                </a>
              </div>
            </Link>
            <Link to={"/PostForm"}>
              <div style={styles.sellButtonDivComp}>
                <button type="button" style={styles.sellButton}>
                  +SELL
                </button>
              </div>
            </Link>
          </Col>
        </Row>

        <Row>
          <Col md="9">
            <Navbar>
              <UncontrolledDropdown inNavbar nav style={styles.navComponents}>
                <DropdownToggle caret nav style={styles.navComponents}>
                  Opetions
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem></DropdownItem>
                  <DropdownItem></DropdownItem>
                  <DropdownItem></DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem style={styles.navComponents}>
                <NavLink href="/components/" style={styles.navComponents}>
                  Mobile Phones
                </NavLink>
              </NavItem>
              <NavItem style={styles.navComponents}>
                <NavLink href="/components/" style={styles.navComponents}>
                  Cars
                </NavLink>
              </NavItem>
              <NavItem style={styles.navComponents}>
                <NavLink href="/components/" style={styles.navComponents}>
                  Motorcycles
                </NavLink>
              </NavItem>
              <NavItem style={styles.navComponents}>
                <NavLink href="/components/" style={styles.navComponents}>
                  Houses
                </NavLink>
              </NavItem>
              <NavItem style={styles.navComponents}>
                <NavLink href="/components/" style={styles.navComponents}>
                  TV-Video-Audio
                </NavLink>
              </NavItem>
              <NavItem style={styles.navComponents}>
                <NavLink href="/components/" style={styles.navComponents}>
                  Tablets
                </NavLink>
              </NavItem>
              <NavItem style={styles.navComponents}>
                <NavLink href="/components/" style={styles.navComponents}>
                  Land and Plots
                </NavLink>
              </NavItem>
            </Navbar>
          </Col>
          <Col md="3"></Col>
        </Row>
      </Container>

      {/* <div style={styles.backgroundImage} alt="imag"></div>
      <div style={styles.dairyMilkImage}>
        <img src={dairyMilk} alt="dairyMilk" />
      </div> */}
    </div>
  );
}

export default Header;
