import {
  movie_list,
  event_imgs,
  permi_Array,
  musicimgs,
  outdoor_events,
  $,
  $$,
  only_img_loop,
  full_fun,
  create,
  footer,
  bootstrap_carousel,
  bannerig,
  location,
  sign_in_page,
  movie_detail_banner,
  about_m_two_line,
  hrline,
  cast,
  castdata,
  crewdata,
  topreview,
  theaters,
  weekslot,
  filling_range,
  table_movie_list,
  seats,
} from "../ticketNew.js/exportfuntions.js";
// create a element

let over_all_div = document.getElementById("navbar");

let home_contant = document.getElementById("home_contant");
let locationname;
// main heading
function header() {
  let header_div = create("div");
  header_div.className = "container";
  header_div.id = "nav1";
  over_all_div.appendChild(header_div);
  // first header
  let header_tag = create("header");
  header_tag.className =
    "d-flex flex-wrap firstheader justify-content-between ps-2 pe-2 pt-3 pb-5";
  header_div.appendChild(header_tag);
  // img div
  let first_div = create("div");
  first_div.className = "d-flex flex-wrap";
  header_tag.appendChild(first_div);
  //
  let img_div = create("div");
  first_div.appendChild(img_div);
  // img tag
  let img_tag = create("img");
  img_tag.className = "logo";
  img_tag.alt = "logo";
  img_tag.src = "./access/bmslogo.png";
  img_div.appendChild(img_tag);
  // search
  let search_div = create("div");
  search_div.className = "search_bar";
  first_div.appendChild(search_div);
  let search_icon_span = create("span");
  search_icon_span.className = "icon";
  search_icon_span.innerHTML = '<i class="fas fa-search"></i>';
  search_div.appendChild(search_icon_span);
  let search_icon_span2 = create("span");
  search_icon_span2.innerText =
    "Search for Movies, Events, Plays, Sports, Activites";
  search_div.appendChild(search_icon_span2);
  // second div
  let second_div = create("div");
  second_div.className = "d-flex flex-wrap";
  header_tag.appendChild(second_div);
  // select
  let select_div = create("div");
  select_div.className = "select";
  second_div.appendChild(select_div);
  let select_tag = create("span");
  select_tag.className = "select set_location";
  select_div.addEventListener("click", loction_function);
  select_div.appendChild(select_tag);
  select_tag.innerText = locationname ? locationname : "Location";
  let select_tag2 = create("span");
  select_tag2.innerHTML = '<i class="fa-solid fa-chevron-down"></i>';
  select_div.appendChild(select_tag2);
  // button
  let btn_div = create("div");
  btn_div.className = "select";
  second_div.appendChild(btn_div);
  let btn_tag = create("button");
  btn_tag.addEventListener("click", signIn_function);
  btn_tag.className = "sing_btn";
  btn_tag.innerText = "Sign In";
  btn_div.appendChild(btn_tag);
  // icon
  let icon_div = create("div");
  icon_div.className = "homeicondiv";
  second_div.appendChild(icon_div);
  icon_div.innerHTML = '<i class="fa-solid fa-bars homeicon"></i>';
}
// sub heading
function subheader() {
  let contain = document.querySelector("#nav1");
  // outer div
  let outer_nav2 = create("div");
  over_all_div.appendChild(outer_nav2);
  outer_nav2.id = "outer_nav2";
  let sub_head_div = create("div");
  sub_head_div.className =
    "d-flex flex-wrap justify-content-between  second_header";
  sub_head_div.id = "nav2";
  outer_nav2.appendChild(sub_head_div);
  // left div
  let left_div = create("div");
  left_div.className = "d-flex flex-wrap childdiv1";
  sub_head_div.appendChild(left_div);
  let leftitem1 = create("div");
  leftitem1.innerText = "Movies";
  left_div.appendChild(leftitem1);
  let leftitem2 = create("div");
  leftitem2.innerText = "Stream";
  left_div.appendChild(leftitem2);
  let leftitem3 = create("div");
  leftitem3.innerText = "Events";
  left_div.appendChild(leftitem3);
  let leftitem4 = create("div");
  leftitem4.innerText = "Plays";
  left_div.appendChild(leftitem4);
  let leftitem5 = create("div");
  leftitem5.innerText = "Sports";
  left_div.appendChild(leftitem5);
  let leftitem6 = create("div");
  leftitem6.innerText = "Activites";
  left_div.appendChild(leftitem6);
  // right div
  let right_div = create("div");
  right_div.className = "d-flex flex-wrap childdiv2";
  sub_head_div.appendChild(right_div);
  let rightitem1 = create("div");
  rightitem1.innerText = "ListYourShow";
  right_div.appendChild(rightitem1);
  let rightitem2 = create("div");
  rightitem2.innerText = "Corporates";
  right_div.appendChild(rightitem2);
  let rightitem3 = create("div");
  rightitem3.innerText = "Offers";
  right_div.appendChild(rightitem3);
  let rightitem4 = create("div");
  rightitem4.innerText = "Gift Cards";
  right_div.appendChild(rightitem4);
}
// banner
function banner() {
  let banner = create("div");
  banner.className = "container adbanner";
  let bannerimg = create("img");
  bannerimg.className = "adbannerimg";
  bannerimg.src = "./access/aftermovingimg.avif";
  banner.appendChild(bannerimg);
  home_contant.appendChild(banner);
}
header();
subheader();
location();
sign_in_page();
function loction_function() {
  var dis = $("#location_input");
  dis.style.display = "block";
   document.getElementById("navbar").classList.add("no-scroll")
}
setTimeout(() => {
  over_all_div.insertBefore(nav1, home_contant);
  over_all_div.insertBefore(outer_nav2, home_contant);
  over_all_div.insertBefore(home_contant, movie_detail);
  over_all_div.insertBefore(movie_detail, list_theater);
  over_all_div.insertBefore(list_theater, seats_panel);
  //  over_all_div.insertBefore(nav2, movie_detail);
}, 0);
//
document.querySelector("#location_input").addEventListener("click", (event) => {
  const locationContainer = document.querySelector(".loaction_container");

  // If the clicked target is NOT inside the .loaction_container
 
  if (!locationContainer.contains(event.target)) {
    // Hide the modal or the parent container
       document.getElementById("navbar").classList.remove("no-scroll")
    document.querySelector("#location_input").style.display = "none";
  }
});
document.querySelector(".locationimgdiv").addEventListener("click", (event) => {
  document.getElementById("navbar").classList.add("no-scroll")
  const clickedCity = event.target.closest("span");

  if (clickedCity && clickedCity.querySelector("div")) {
    const cityName = clickedCity.querySelector("div").textContent.trim();

    let setlocal = document.querySelector(".set_location");
    setlocal.innerText = cityName;
    locationname = cityName;
    document.querySelector("#location_input").style.display = "none";
     document.getElementById("navbar").classList.remove("no-scroll")
    // You can now use cityName to update a field or close the modal
  }
});

//
let sing_dis = document.querySelector("#singincontainer");
function signIn_function() {
  sing_dis.style.display = "block";
    document.getElementById("navbar").classList.add("no-scroll")
}
$("#singincontainer").addEventListener("click", (event) => {
  const locationContainer = document.querySelector(".sing_over_all_div");
  let error = document.querySelector("#siginerror");

  if (!locationContainer.contains(event.target)) {
    error.innerText = "";
    document.querySelector("#singin_number").value = "";
document.getElementById("navbar").classList.remove("no-scroll")
    document.querySelector("#singincontainer").style.display = "none";
  }
});
document.querySelector("form").addEventListener("submit", (event) => {
  let mobile = document.querySelector("#singin_number").value;
document.getElementById("navbar").classList.add("no-scroll")
  let error = document.querySelector("#siginerror");

  if (mobile == "") {
    error.innerText = "Enter Number";
    error.style.color = "red";
    event.preventDefault();
  } else if (mobile.length !== 10) {
    error.innerText = "Enter ten digit Number";
    error.style.color = "red";
    event.preventDefault();
  } else {
    userdetails.push({ Mobile: mobile });
    error.innerText = "";
document.getElementById("navbar").classList.remove("no-scroll")
    document.querySelector("#singincontainer").style.display = "none";
  }
});
bootstrap_carousel();
// only_img_loop(bannerig,'','banner_img');

full_fun(movie_list, "Recommonded Movies", "span_img");
banner();
//
//
let recommond = $(`#${movie_list[0].id}_div`);

$(`#${movie_list[0].id}back_btn`).addEventListener("click", () => {
  recommond.scrollLeft += 1370;
});
// next function
$(`#${movie_list[0].id}nextbtn`).addEventListener("click", () => {
  recommond.scrollLeft -= 1370;
});

// events
only_img_loop(event_imgs, "The Best Of Live Events", "event_img");

let events = $(`#${event_imgs[0].id}_div`);

$(`#${event_imgs[0].id}back_btn`).addEventListener("click", (e) => {
  events.scrollLeft += 1370;
});
// next function
$(`#${event_imgs[0].id}nextbtn`).addEventListener("click", () => {
  events.scrollLeft -= 1370;
});
//
// premieres
full_fun(permi_Array, "Premieres", "span_img", "premieres_outer_div");
let pre = create("div");
pre.className = "premieres_img_set container";
let pre_img = create("img");
pre_img.src = "./access/perimerbanner.avif";
pre_img.className = "pre_img";
pre.appendChild(pre_img);

$(".premieres_outer_div").style.backgroundColor = "rgb(43, 49, 72)";
$(".premieres_outer_div > h3").style.color = "rgb(255, 255, 255)";
$(".premieres_outer_div").appendChild(pre);
setTimeout(() => {
  let heading = $(".premieres_outer_div > h3.heading_img");

  heading.parentNode.insertBefore(pre, heading);
}, 0);

let premieres = $(`#${permi_Array[0].id}_div`);
$(`#${permi_Array[0].id}back_btn`).addEventListener("click", () => {
  premieres.scrollLeft += 1370;
});
// next function
$(`#${permi_Array[0].id}nextbtn`).addEventListener("click", () => {
  premieres.scrollLeft -= 1370;
});

full_fun(musicimgs, "Your Music Studios", "span_img");

let music = $(`#${musicimgs[0].id}_div`);

$(`#${musicimgs[0].id}back_btn`).addEventListener("click", () => {
  music.scrollLeft += 1370;
});
// next function
$(`#${musicimgs[0].id}nextbtn`).addEventListener("click", () => {
  music.scrollLeft -= 1370;
});

full_fun(outdoor_events, "Outdoor Events", "span_img");
let outdoor = $(`#${outdoor_events[0].id}_div`);

$(`#${outdoor_events[0].id}back_btn`).addEventListener("click", () => {
  outdoor.scrollLeft += 1370;
});
// next function
$(`#${outdoor_events[0].id}nextbtn`).addEventListener("click", () => {
  outdoor.scrollLeft -= 1370;
});
$(`#${movie_list[0].id}_div`).addEventListener("click", (event) => {
  const clickedCity = event.target.closest("span");

  if (clickedCity) {
    $("#movie_detail").style.display = "block";
    home_contant.style.display = "none";
    movie_detail_banner();
    about_m_two_line();
    hrline();
    cast("Cast", castdata);
    hrline();
    cast("Crew", crewdata);
    hrline();
    //  topreview()

    if (document.querySelector("#booking_btn")) {
      setTimeout(() => {
        const btn = document.querySelector("#booking_btn");
        btn?.addEventListener("click", (e) => {
          if (e.target.id === "booking_btn") {
          }

          $("#movie_detail").style.display = "none";
          home_contant.style.display = "none";
          theaters();
          weekslot();
          filling_range();
          table_movie_list();
          $(".data_container").addEventListener("click", (e) => {
            let closet_date = e.target.closest(".date_box");
            let delete_active = $(`.date_box.date_active`);
            delete_active.classList.remove("date_active");
            closet_date.classList.add("date_active");
          });
          const container = document.querySelector(".movie_table_container");

          if (container) {
            container?.addEventListener("click", function (e) {
              if (e.target.classList.contains("timing_div")) {
                const clickedTime = e.target.innerText;
                const theaterDiv = e.target.closest(".layer_div");
                const theaterName =
                  theaterDiv.querySelector(".select_theater").innerText;
                let arrayof_timing = theaterDiv.querySelectorAll(".timing_div");
                $("#list_theater").style.display = "none";
                $("#nav1").style.display = "none";
                $("#outer_nav2").style.display = "none";
                $(".footer_div").style.display = "none";

                seats(theaterName, clickedTime, arrayof_timing);
                $("#timinglist_div").addEventListener("click", (e) => {
                  let closet_date = e.target.closest("#div_timing_item_list");

                  let delete_active = $(`#div_timing_item_list.active_timing`);
                  delete_active.classList.remove("active_timing");
                  delete_active.classList.add("list_time_item");
                  closet_date.classList.add("active_timing");
                  closet_date.classList.remove("list_time_item");
                });
                $("#seats_table")
                  .addEventListener("click", (e) => {
                    // Find the clicked .tdid.curser
                    const td = e.target.closest(".tdid.curser");
                    if (!td) return;

                    // Optionally find its parent <tr class="trid"> if needed
                    const tr = td.closest(".trid");
                    // Activate this cell
                    td.classList.add("curser_active");
                  });
              }
            });
          } else {
            console.error("#booking_btn not found");
          }
        });
      }, 1000);
    }
  }
});

footer();
