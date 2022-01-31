import React from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';

class Tutornavbar extends React.Component {

    render() {
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
                                    <li className='active'><Link to={{ pathname: "/Tutorpage" }}>Home</Link></li>
                                    <li className="drop-down"><Link>Add</Link>
                                        <ul>
                                            <li><Link to={{ pathname: "/addstudentpage" }}>Add Students</Link></li>
                                            <li><Link to={{ pathname: "/addrepresentativepage" }}>Add Representative</Link></li>

                                        </ul>
                                    </li>
                                    <li className="drop-down"><Link>View</Link>
                                        <ul>
                                            <li><Link to={{ pathname: "/viewattendance" }}>Attendance</Link></li>
                                            <li><Link to={{ pathname: "/viewpermission" }}>Permissions</Link></li>
                                            <li><Link to={{ pathname: "/viewstudents" }}>Students</Link></li>
                                            <li><Link to={{ pathname: "/Viewrepresentative" }}>Representative</Link></li>

                                        </ul>
                                    </li>
                                    <li className="drop-down"><Link>Retrieve</Link>
                                        <ul>
                                            <li><Link to={{ pathname: "/Retrieveattendance" }}>Attendance</Link></li>
                                            <li><Link to={{ pathname: "/Retrievepermission" }}>Permissions</Link></li>
                                            <li><Link to={{ pathname: "/Retrievemonthlyattendance" }}>Monthly Attendance</Link></li>
                                            <li><Link to={{ pathname: "/Retrievemonthlypermission" }}>Monthly Permissions</Link></li>
                                            <li><Link to={{ pathname: "/Studentmonthlyattendance" }}>Student Monthly Attendance</Link></li>
                                        </ul>
                                    </li>
                                    <li className="drop-down"><Link>Upload</Link>
                                        <ul>
                                            <li><Link to={{ pathname: "/uploadpdf" }}>Upload Pdf</Link></li>
                                        </ul>
                                    </li>
                                    <li className="drop-down"><Link>Settings</Link>
                                        <ul>
                                            <li><Link to="/#">Logout</Link></li>
                                        </ul>
                                    </li>

                                </ul>
                            </nav>
                        </div>
                    </div>

                </div>
            </header>
        </>
    }


}
export default Tutornavbar;