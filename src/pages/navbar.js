import { React } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';

const Navbar = () => {


  return <>
    <header id="header" className="fixed-top">
      <button className="mobile-nav-toggle d-lg-none" type="button" onClick={() => {
        if ($('.nav-menu').length) {
          var $mobile_nav = $('.nav-menu').clone().prop({
            class: 'mobile-nav d-lg-none'
          });
          $('body').append($mobile_nav);
          $('body').prepend('<button type="button" class="mobile-nav-toggle d-lg-none"><i class="icofont-navigation-menu"></i></button>');
          $('body').append('<div class="mobile-nav-overly"></div>');

          $(document).on('click', '.mobile-nav-toggle', function (e) {
            $('body').toggleClass('mobile-nav-active');
            $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
            $('.mobile-nav-overly').toggle();
          });

          $(document).on('click', '.mobile-nav .drop-down > a', function (e) {
            e.preventDefault();
            $(this).next().slideToggle(300);
            $(this).parent().toggleClass('active');
          });

          $(document).click(function (e) {
            var container = $(".mobile-nav, .mobile-nav-toggle");
            if (!container.is(e.target) && container.has(e.target).length === 0) {
              if ($('body').hasClass('mobile-nav-active')) {
                $('body').removeClass('mobile-nav-active');
                $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
                $('.mobile-nav-overly').fadeOut();
              }
            }
          });
        } else if ($(".mobile-nav, .mobile-nav-toggle").length) {
          $(".mobile-nav, .mobile-nav-toggle").hide();
        }

      }}>
        <i className="icofont-navigation-menu">

        </i>
      </button>
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-xl-10 d-flex align-items-center">
            <h1 className="logo mr-auto"><Link to="/#">PSNACET<span>.</span></Link></h1>
            <nav className="nav-menu d-none d-sm-block">
              <ul>
                <li className="active"><Link to="/">Home</Link></li>
                <li><Link to="/About">About</Link></li>
                <li><Link to="/Service">Services</Link></li>
                <li><Link to="/Staff">Staffs</Link></li>
                <li className="drop-down"><Link to="/#">Login</Link>
                  <ul>
                    <li><Link to="/Studentlogin">Student Login</Link></li>
                    <li><Link to="/Representativelogin">Representative Login</Link></li>
                    <li><Link to="/Tutorlogin">Tutor Login</Link></li>
                    <li><Link to="/Teacherlogin">Teacher Login</Link></li>
                    <li><Link to="/Hodlogin">HOD Login</Link></li>
                  </ul>
                </li>
                <li><Link to="/Contact">Contact</Link></li>
              </ul>
            </nav>
          </div>
        </div>

      </div>
    </header>
  </>

}
export default Navbar;