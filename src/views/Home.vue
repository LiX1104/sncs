<template>
    <div class="home">
      <div id="header1">
        <div class="header_">
          <div class="head-left">
            <img
              src="https://res.suning.cn/project/cmsWeb/suning/newwap/TYPD/images/back-roof.png"
              alt=""
            />
          </div>
          <div class="head-center">
            <img src="https://image1.suning.cn/uimg/cms/img/163670496580683177.png" alt="">
            <img src="https://res.suning.cn/project/cmsWeb/suning/newwap/TYPD/images/followB.png" alt="">
          </div>
          <div class="head-right">
            <img src="https://res.suning.cn/project/cmsWeb/suning/newwap/TYPD/images/cart-soldout.png" alt="">
            <img
              src="https://res.suning.cn/project/cmsWeb/suning/newwap/TYPD/images/more-roof.png"
              alt=""
            />
          </div>
        </div>
        <div class="search">
          <div class="search-bar">
            <img
              src="https://res.suning.cn/project/cmsWeb/suning/newwap/TYPD/images/search.png"
              alt=""
            />
            <input type="text" placeholder="超市囤货盛典  满99减30" />
          </div>
        </div>

        <div id="slideshow">
          <div id="sticky">
              <div class="app-scroller">
                  <ul>
                    <li>111</li>
                    <li>222</li>
                    <li>333</li>
                    <li>44</li>
                    <li>111</li>
                    <li>222</li>
                    <li>333</li>
                    <li>推荐</li>
                    <li>酒水</li>
                    <li>零食</li>
                    <li>纸品</li>
                    <li>母婴</li>
                    <li>生鲜</li>
                    <li>粮油</li>
                    <li>洗护</li>
                    <li>冲乳</li>
                    <li>日用</li>
                    <li>保健</li>
                    <li>药品</li>
                    <li>医疗</li>
                    <li>宠物</li>
                  </ul>
              </div>
          </div>
        </div>

      </div>
      <div id="header2" v-show="isShow">
        <div class="header-">
          <div class="head_left">
            <img
              src="https://res.suning.cn/project/cmsWeb/suning/newwap/TYPD/images/back-roof.png"
              alt=""
            />
          </div>
          <div class="head_center">
            <div class="search_">
              <div class="search_bar">
                <img
                  src="https://res.suning.cn/project/cmsWeb/suning/newwap/TYPD/images/search.png"
                  alt=""
                />
                <input type="text" placeholder="超市囤货盛典 满99减30" />
              </div>
            </div>
            <img class="logo2" src="https://res.suning.cn/project/cmsWeb/suning/newwap/TYPD/images/followB.png" alt="">
          </div>
          <div class="head_right">
            <img src="https://res.suning.cn/project/cmsWeb/suning/newwap/TYPD/images/cart-soldout.png" alt="">
            <img
              src="https://res.suning.cn/project/cmsWeb/suning/newwap/TYPD/images/more-roof.png"
              alt=""
            />
          </div>
        </div>
        <div id="slideshow_">
            <div id="sticky_">
                <div class="app-scroller_">
                    <ul>
                        <li>111</li>
                      <li>222</li>
                      <li>333</li>
                      <li>44</li>
                      <li>111</li>
                      <li>222</li>
                      <li>333</li>
                      <li>推荐</li>
                      <li>酒水</li>
                      <li>零食</li>
                      <li>纸品</li>
                      <li>母婴</li>
                      <li>生鲜</li>
                      <li>粮油</li>
                      <li>洗护</li>
                      <li>冲乳</li>
                      <li>日用</li>
                      <li>保健</li>
                      <li>药品</li>
                      <li>医疗</li>
                      <li>宠物</li>
                    </ul>
                </div>
            </div>
          </div>
      </div>
      <div id="banner-part">
        <div class="swiper-container" id="swiper2">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <div class="container">
                <li>
                  <img
                    src="https://image2.suning.cn/uimg/cms/img/163670527145474218.png?format=is"
                    alt=""
                  />
                  <span>分类</span>
                </li>
                <li>
                  <img
                    src="https://image1.suning.cn/uimg/cms/img/163670528014383679.png?format=is"
                    alt=""
                  />
                  <span>抢神券</span>
                </li>
                <li>
                  <img
                    src="https://image1.suning.cn/uimg/cms/img/163670529260762436.png?format=is"
                    alt=""
                  />
                  <span>苏宁健康</span>
                </li>
                <li>
                  <img
                    src="https://image2.suning.cn/uimg/cms/img/163670530208120817.png?format=is"
                    alt=""
                  />
                  <span>苏宁宜品</span>
                </li>
                <li>
                  <img
                    src="https://image1.suning.cn/uimg/cms/img/163670531123025944.gif"
                    alt=""
                  />
                  <span>抢茅台</span>
                </li>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="container">
                <div class="swiper-slide">
                  <div class="container">
                    <li>
                      <img
                        src="https://image1.suning.cn/uimg/cms/img/163670532182815750.png?format=is"
                        alt=""
                      />
                      <span>母婴玩具</span>
                    </li>
                    <li>
                      <img
                        src="https://image1.suning.cn/uimg/cms/img/163670533280763547.png?format=is"
                        alt=""
                      />
                      <span>苏宁卡</span>
                    </li>
                    <li>
                      <img
                        src="https://image1.suning.cn/uimg/cms/img/163670535021817178.png?format=is"
                        alt=""
                      />
                      <span>特色馆</span>
                    </li>
                    <li>
                      <img
                        src="https://image1.suning.cn/uimg/cms/img/163670536760870375.png?format=is"
                        alt=""
                      />
                      <span>超市榜单</span>
                    </li>
                    <li>
                      <img
                        src="https://image2.suning.cn/uimg/cms/img/163670537776187460.png?format=is"
                        alt=""
                      />
                      <span>种草</span>
                    </li>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- 如果需要分页器 -->
          <div class="swiper-pagination" id="pagination2"></div>
        </div>
      </div>
      <div class="lun">
        <div class="swiper-container" id="swiper1">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <img
                src="https://image1.suning.cn/uimg/cms/img/163732133782285811.png?format=is"
                alt=""
              />
            </div>
            <div class="swiper-slide">
              <img
                src="https://image3.suning.cn/uimg/cms/img/163732123967018976.png?format=is"
                alt=""
              />
            </div>
            <div class="swiper-slide">
              <img
                src="https://image3.suning.cn/uimg/cms/img/163732127709616350.png?format=is"
                alt=""
              />
            </div>
            <div class="swiper-slide">
              <img
                src="https://image1.suning.cn/uimg/cms/img/163702385565426786.png?format=is"
                alt=""
              />
            </div>
            <div class="swiper-slide">
              <img
                src="https://image1.suning.cn/uimg/cms/img/163670613719646774.png?format=is"
                alt=""
              />
            </div>

          </div>
          <div class="swiper-pagination" id="pagination1"></div>
        </div>
      </div>
      <div class="one_pic">
        <div>
          <img src="https://image1.suning.cn/uimg/cms/img/163732142150067827.gif" alt="">
        </div>
      </div>
      <div id="rush-buy">
        <div class="rush-buy-title">
          <img
            src="https://image1.suning.cn/uimg/cms/img/163670553827235573.png?format=is"
            alt=""
          />
        </div>
        <div class="rush-buy-shops">
          <div class="rush-buy-shops-container">
            <li>
              <div class="first">
                <div class="img"></div>
              </div>
              <div class="jieshao">
                舒洁（Kleenex）湿厕纸羊驼湿厕纸家庭装80片*6包（480片）清洁湿纸巾湿巾
                可搭配卷纸卫生纸使用 擦屁屁专用
              </div>
              <div class="price">
                <div class="num">
                  <div class="ziying">
                    <span>自营</span>
                  </div>
                  <div class="daoshou">
                    <span>到手价</span>
                  </div>
                  <dd
                    style="color: #FF3300; font-size: 0.14rem; margin-top: 0.04rem"
                  >
                    ¥88
                  </dd>
                </div>
                <div class="btn">
                  <img
                    src="data:image/png;base64,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"
                    alt=""
                  />
                </div>
              </div>
            </li>
            <li>
              <div class="first">
                <div class="img"></div>
              </div>
              <div class="jieshao">
                舒洁（Kleenex）湿厕纸羊驼湿厕纸家庭装80片*6包（480片）清洁湿纸巾湿巾
                可搭配卷纸卫生纸使用 擦屁屁专用
              </div>
              <div class="price">
                <div class="num">
                  <div class="ziying">
                    <span>自营</span>
                  </div>
                  <div class="daoshou">
                    <span>到手价</span>
                  </div>
                  <dd
                    style="color: #FF3300; font-size: 0.14rem; margin-top: 0.04rem"
                  >
                    ¥88
                  </dd>
                </div>
                <div class="btn">
                  <img
                    src="data:image/png;base64,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"
                    alt=""
                  />
                </div>
              </div>
            </li>
            <li>
              <div class="first">
                <div class="img"></div>
              </div>
              <div class="jieshao">
                舒洁（Kleenex）湿厕纸羊驼湿厕纸家庭装80片*6包（480片）清洁湿纸巾湿巾
                可搭配卷纸卫生纸使用 擦屁屁专用
              </div>
              <div class="price">
                <div class="num">
                  <div class="ziying">
                    <span>自营</span>
                  </div>
                  <div class="daoshou">
                    <span>到手价</span>
                  </div>
                  <dd
                    style="color: #FF3300; font-size: 0.14rem; margin-top: 0.04rem"
                  >
                    ¥88
                  </dd>
                </div>
                <div class="btn">
                  <img
                    src="data:image/png;base64,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"
                    alt=""
                  />
                </div>
              </div>
            </li>
            <li>
              <div class="first">
                <div class="img"></div>
              </div>
              <div class="jieshao">
                舒洁（Kleenex）湿厕纸羊驼湿厕纸家庭装80片*6包（480片）清洁湿纸巾湿巾
                可搭配卷纸卫生纸使用 擦屁屁专用
              </div>
              <div class="price">
                <div class="num">
                  <div class="ziying">
                    <span>自营</span>
                  </div>
                  <div class="daoshou">
                    <span>到手价</span>
                  </div>
                  <dd
                    style="color: #FF3300; font-size: 0.14rem; margin-top: 0.04rem"
                  >
                    ¥88
                  </dd>
                </div>
                <div class="btn">
                  <img
                    src="data:image/png;base64,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"
                    alt=""
                  />
                </div>
              </div>
            </li>
            <li>
              <div class="first">
                <div class="img"></div>
              </div>
              <div class="jieshao">
                舒洁（Kleenex）湿厕纸羊驼湿厕纸家庭装80片*6包（480片）清洁湿纸巾湿巾
                可搭配卷纸卫生纸使用 擦屁屁专用
              </div>
              <div class="price">
                <div class="num">
                  <div class="ziying">
                    <span>自营</span>
                  </div>
                  <div class="daoshou">
                    <span>到手价</span>
                  </div>
                  <dd
                    style="color: #FF3300; font-size: 0.14rem; margin-top: 0.04rem"
                  >
                    ¥88
                  </dd>
                </div>
                <div class="btn">
                  <img
                    src="data:image/png;base64,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"
                    alt=""
                  />
                </div>
              </div>
            </li>
            <li>
              <div class="first">
                <div class="img"></div>
              </div>
              <div class="jieshao">
                舒洁（Kleenex）湿厕纸羊驼湿厕纸家庭装80片*6包（480片）清洁湿纸巾湿巾
                可搭配卷纸卫生纸使用 擦屁屁专用
              </div>
              <div class="price">
                <div class="num">
                  <div class="ziying">
                    <span>自营</span>
                  </div>
                  <div class="daoshou">
                    <span>到手价</span>
                  </div>
                  <dd
                    style="color: #FF3300; font-size: 0.14rem; margin-top: 0.04rem"
                  >
                    ¥88
                  </dd>
                </div>
                <div class="btn">
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAMAAACfWMssAAACTFBMVEUAAAD/////a2v8YTf3USD3Uhf4VRz7TBj5UR33Thb9TBr+ThX4Tyb8Sxf3SxT1UBr7TR35TRr4Thj6Rhb6UBP6Rxb7Rhb7VhT9TBX8aQ/6Rxf6SBX7YA/6Rhb6Rhb6RxX7XhH7Shb6Rhb7TRX6RxX6ShT7Rxb9aA/6SBf8YRD9Uhb6TBT7TRb6TBT7VhL8aA/7WRH8Yw/8aA75Rhf6TRX5Rhb7YRH7TBT7ag78YBD7UxP8aA78YRH8aQ77YBH5Rhf7WhH7ZRH6WBL7Rhj7UhT8Rxb8RRX7VBP7YRD7WRL8ag/7Zg/7XBP7VhP7URT6RxX4SBX6UxT8SBf9ZRH7UxT6Rxf6Shf9Zw79VRP6RRb8Zw78RRf7Zw/6TBb5Rhb////6TRT6TxP6ShX6UhP7XxD6XBH6WRH7XhD6VhP6TBT6URP6VBL6VhL6SRX7Yg/7Zw76WxH7YRD6WBL6SBf7Yw/6ZQ77ZA/7Zg/7ZQ/6RxX7YRH8oIT8lnn8m3b8aA78pIT8p4P6djz6cjz6YDP++fj9vqr8mHf8nnT6bTz7XBL7WhL++/n+9/X+9fH+4tj90Lv9xbD8sZz8poz7iWb7elP6ZT36aTz6XTD6bC76aC7+7ej+6+T+59/918391cv9ybj8uKH9tZf8qoT7jXD7lGf6flz6a0L6ZTD5ZC/5VSn5Uyb6UCD6YBr+/v7908T9z8P8q5X8r4/7oon7m4D7lXL6e1n6dFH7g0z6cUr7fEL+7+r9283928z8onr8ilT7dkT5WC36byz5Vxz6XBC12sQTAAAAXnRSTlMAAQIEDgoIFBAXGwwGHxgTER0a6iirdiUi8+7m3NbQtWQ49OnBiIJ/YU0++/fw8O/r6ufh3dzVzMq+vbWzpZmSjIt7WlJQSPPt5OTY1ayqnpyamXdycG9qaWdZTkM18tz/oAAABOFJREFUSMd9lmdfE0EQxtfk0iAhBaSJCvbee++993ojSpMgFyMhsRulqEgRUbBXOvbe2xdz9jaXvdydzAvekP/vmX1mn5slCTWAlslkOrhz24gZwydMGD5j3tYdeWaTSf4H+V8xyrl/YLYonjh2+OjRQ/n5+UeO+CdtXGFlbD+YJT1VxKLg4UMULEXSXzJlmYWjBph5zHSEFPAokqWlR/wlJWVlRWtzYx0bcauGiLE6yVo9JCuW+MuCRUWBDWPx9BqSWTKKQYyMgaUIomIweDUQKFzCRDWcMJBjvFVqjp8pFhYWL7ArJOdc2KYeZOagJAMLZmUwknOZg9QYH4dsTpmseAXBgqmM5H1yPZ2rXBHB47M8MZKNgZ+Pm4Nz5K5SsLi44NTx8gVORsoc+qkHuTl0jleLmGJ5xVLZW0K5VcrPexNaZYJ0HHHFgvLyitBYJClotioHrIYH77WKaA5tNVh0lSqeQsXK9VYzgvSeKTL3AeCp0TiYImu1MhTZjcckJrMwXQFbq+ugQX1z8mVFBFExEKAgVQxNs5tNxOxMF3k9gue9akV2xrISrlhREYqERzvNxGxJVYFPAT6IYs+Z06zOy3VBrtrPimJYmiyYiXOlqKoOgLfUJMP6UXyKtRqS9jmJNfFuV0GTKL59bgg+YeOIRMLSfCuxZMsEN/Ye/u1ubb2E1dnV1dl5G6utra0W4JnSakjKEkiemFDXAXoM8/gY4DfOUR6HJJ07QBRPuTsthnn8Bndj5kRCYUkaTbYkgjcBThvlsa8OmpSbQ8GFZIQmTtegySiPHwFqFcVwWDo3h8zUxOIB3DXK4xOAaAzEaUjSOpIq6tzpNshjI9TH8lhZGUHFLDJMA94AeK/PY7AeGgvj5khoKwe5O2/0eYzi+JU8yuM4p2tVvAYP9XnE8X+M5xHNkbJ05ogv4I4+jw+hro/nERWn4Tg09QrgF1Xsbe1ouVFz/nF149d79QCNPI/0jHPIZlHvTrsoNl+DhKr6zPNIXV1I0rXgJYBmUbzDkbsNL5peR/GDzPNIr9w4UVv11J2WR9ff1Nxoudj1R54H+8rxPEpjiS1bC76EL/r9SMG/PI9ZKcQ91MCdDzdv3sK6TOsiVjTapm41JM13E/dyLdgORvUdXeV5zHUTjy9Vu29eGoGPA4U8j5O9HmK3jRK1ZPsZuWpqas7GqvZZH4LxPC612YngdvHV2P9+jOdxaqZNIILHsUvPdRvuRyWP2x0egVjsNt9gDdbzAO58UvL4s6GqOkgV43nM8drsycQiuB1aY5sB4L6SxwYAeKfej5Fch1uwEGsySi7WfQXgnpJHemlfq/fjIh8KWomTSiYl3oKOKoAzSqweAdRFVftxrpcKOomZSqZkJB7z0rtP8Tz6nzVfVO3HnLQUKojbCiU9Dl8evwb97sc143wOT7IF1xxucrnZPK7Zz37MGZeEjaKgieADVW42KS3hnPy9ytLBLsDctCS5UbrKB5iwWZl0cW9171Xm6iIX5Wij8qtDbtaDpHcMb9cgjzm5lPMIFmyUgmoyM33Q/96rU5ZlelUcggpptzl8XlfayGyj9+qkJWkur89hs8c4BBUSz+l2oKgrY+/QYYn7cfW8PYglpTjc9mTOqUjBg6KIujJXjhw4e9DE8eMnDp+9aeSKDBdiKOcRVNw/H+/ynRJ1flsAAAAASUVORK5CYII="
                    alt=""
                  />
                </div>
              </div>
            </li>
            <li>
              <div class="first">
                <div class="img"></div>
              </div>
              <div class="jieshao">
                舒洁（Kleenex）湿厕纸羊驼湿厕纸家庭装80片*6包（480片）清洁湿纸巾湿巾
                可搭配卷纸卫生纸使用 擦屁屁专用
              </div>
              <div class="price">
                <div class="num">
                  <div class="ziying">
                    <span>自营</span>
                  </div>
                  <div class="daoshou">
                    <span>到手价</span>
                  </div>
                  <dd
                    style="color: #FF3300; font-size: 0.14rem; margin-top: 0.04rem"
                  >
                    ¥88
                  </dd>
                </div>
                <div class="btn">
                  <img
                    src="data:image/png;base64,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"
                    alt=""
                  />
                </div>
              </div>
            </li>
            <li>
              <div class="first">
                <div class="img"></div>
              </div>
              <div class="jieshao">
                舒洁（Kleenex）湿厕纸羊驼湿厕纸家庭装80片*6包（480片）清洁湿纸巾湿巾
                可搭配卷纸卫生纸使用 擦屁屁专用
              </div>
              <div class="price">
                <div class="num">
                  <div class="ziying">
                    <span>自营</span>
                  </div>
                  <div class="daoshou">
                    <span>到手价</span>
                  </div>
                  <dd
                    style="color: #FF3300; font-size: 0.14rem; margin-top: 0.04rem"
                  >
                    ¥88
                  </dd>
                </div>
                <div class="btn">
                  <img
                    src="data:image/png;base64,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"
                    alt=""
                  />
                </div>
              </div>
            </li>
          </div>
        </div>
      </div>
      <div id="tuijian">
        <div class="tj-title">
          <img
            src="https://image1.suning.cn/uimg/cms/img/162268376858668737.png?format=is"
            alt=""
          />
        </div>
        <div class="tj-shops">
          <ul>
            <li class="other">
              <div class="img">
                <img
                  src="https://imgservice.suning.cn/uimg1/b2c/image/VLq-GSqfxK9fnqWWLi4nRg.png?format=400h_400w_4e_80q.webp"
                  alt=""
                />
              </div>
              <div class="text">
                杯具熊儿童水杯幼儿园宝宝防漏吸管杯 儿童防摔防摔防呛学饮杯 鸭嘴杯BEDDYBEAR独角兽学饮杯
              </div>
              <div class="features2">
                <span>免费刻字</span>
                <span>送杯套杯刷</span>
              </div>
              <div class="promitionTag">
                <span>领券158-110</span>
              </div>
              <div class="price">
                <span style="font-size: 0.12rem"
                  >¥ <span style="font-size: 0.16rem">99.9</span></span>
                  <span style="color:#999999; font-size:.12rem;">137万+评价</span>
                <img
                  src="data:image/png;base64,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"
                  alt=""
                />
              </div>
              <div class="shop">
                <p class="shop_info">茶杯店铺杯具熊官方旗舰店</p>
                <p class="into_shop">进店 ></p>
              </div>
            </li>
            <li class="other">
              <div class="img">
                <img
                  src="https://imgservice.suning.cn/uimg1/b2c/image/VLq-GSqfxK9fnqWWLi4nRg.png?format=400h_400w_4e_80q.webp"
                  alt=""
                />
              </div>
              <div class="text">
                杯具熊儿童水杯幼儿园宝宝防漏吸管杯 儿童防摔防摔防呛学饮杯 鸭嘴杯BEDDYBEAR独角兽学饮杯
              </div>
              <div class="features2">
                <span>免费刻字</span>
                <span>送杯套杯刷</span>
              </div>
              <div class="promitionTag">
                <span>领券158-110</span>
              </div>
              <div class="price">
                <span style="font-size: 0.12rem"
                  >¥ <span style="font-size: 0.16rem">99.9</span></span>
                  <span style="color:#999999; font-size:.12rem;">137万+评价</span>
                <img
                  src="data:image/png;base64,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"
                  alt=""
                />
              </div>
              <div class="shop">
                <p class="shop_info">茶杯店铺杯具熊官方旗舰店</p>
                <p class="into_shop">进店 ></p>
              </div>
            </li>
            <li class="other">
              <div class="img">
                <img
                  src="https://imgservice.suning.cn/uimg1/b2c/image/VLq-GSqfxK9fnqWWLi4nRg.png?format=400h_400w_4e_80q.webp"
                  alt=""
                />
              </div>
              <div class="text">
                杯具熊儿童水杯幼儿园宝宝防漏吸管杯 儿童防摔防摔防呛学饮杯 鸭嘴杯BEDDYBEAR独角兽学饮杯
              </div>
              <div class="features2">
                <span>免费刻字</span>
                <span>送杯套杯刷</span>
              </div>
              <div class="promitionTag">
                <span>领券158-110</span>
              </div>
              <div class="price">
                <span style="font-size: 0.12rem"
                  >¥ <span style="font-size: 0.16rem">99.9</span></span>
                  <span style="color:#999999; font-size:.12rem;">137万+评价</span>
                <img
                  src="data:image/png;base64,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"
                  alt=""
                />
              </div>
              <div class="shop">
                <p class="shop_info">茶杯店铺杯具熊官方旗舰店</p>
                <p class="into_shop">进店 ></p>
              </div>
            </li>
            <li class="other">
              <div class="img">
                <img
                  src="https://imgservice.suning.cn/uimg1/b2c/image/VLq-GSqfxK9fnqWWLi4nRg.png?format=400h_400w_4e_80q.webp"
                  alt=""
                />
              </div>
              <div class="text">
                杯具熊儿童水杯幼儿园宝宝防漏吸管杯 儿童防摔防摔防呛学饮杯 鸭嘴杯BEDDYBEAR独角兽学饮杯
              </div>
              <div class="features2">
                <span>免费刻字</span>
                <span>送杯套杯刷</span>
              </div>
              <div class="promitionTag">
                <span>领券158-110</span>
              </div>
              <div class="price">
                <span style="font-size: 0.12rem"
                  >¥ <span style="font-size: 0.16rem">99.9</span></span>
                  <span style="color:#999999; font-size:.12rem;">137万+评价</span>
                <img
                  src="data:image/png;base64,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"
                  alt=""
                />
              </div>
              <div class="shop">
                <p class="shop_info">茶杯店铺杯具熊官方旗舰店</p>
                <p class="into_shop">进店 ></p>
              </div>
            </li>
            <li class="other">
              <div class="img">
                <img
                  src="https://imgservice.suning.cn/uimg1/b2c/image/VLq-GSqfxK9fnqWWLi4nRg.png?format=400h_400w_4e_80q.webp"
                  alt=""
                />
              </div>
              <div class="text">
                杯具熊儿童水杯幼儿园宝宝防漏吸管杯 儿童防摔防摔防呛学饮杯 鸭嘴杯BEDDYBEAR独角兽学饮杯
              </div>
              <div class="features2">
                <span>免费刻字</span>
                <span>送杯套杯刷</span>
              </div>
              <div class="promitionTag">
                <span>领券158-110</span>
              </div>
              <div class="price">
                <span style="font-size: 0.12rem"
                  >¥ <span style="font-size: 0.16rem">99.9</span></span>
                  <span style="color:#999999; font-size:.12rem;">137万+评价</span>
                <img
                  src="data:image/png;base64,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"
                  alt=""
                />
              </div>
              <div class="shop">
                <p class="shop_info">茶杯店铺杯具熊官方旗舰店</p>
                <p class="into_shop">进店 ></p>
              </div>
            </li>
            <li class="other">
              <div class="img">
                <img
                  src="https://imgservice.suning.cn/uimg1/b2c/image/VLq-GSqfxK9fnqWWLi4nRg.png?format=400h_400w_4e_80q.webp"
                  alt=""
                />
              </div>
              <div class="text">
                杯具熊儿童水杯幼儿园宝宝防漏吸管杯 儿童防摔防摔防呛学饮杯 鸭嘴杯BEDDYBEAR独角兽学饮杯
              </div>
              <div class="features2">
                <span>免费刻字</span>
                <span>送杯套杯刷</span>
              </div>
              <div class="promitionTag">
                <span>领券158-110</span>
              </div>
              <div class="price">
                <span style="font-size: 0.12rem"
                  >¥ <span style="font-size: 0.16rem">99.9</span></span>
                  <span style="color:#999999; font-size:.12rem;">137万+评价</span>
                <img
                  src="data:image/png;base64,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"
                  alt=""
                />
              </div>
              <div class="shop">
                <p class="shop_info">茶杯店铺杯具熊官方旗舰店</p>
                <p class="into_shop">进店 ></p>
              </div>
            </li>
            <li class="other">
              <div class="img">
                <img
                  src="https://imgservice.suning.cn/uimg1/b2c/image/VLq-GSqfxK9fnqWWLi4nRg.png?format=400h_400w_4e_80q.webp"
                  alt=""
                />
              </div>
              <div class="text">
                杯具熊儿童水杯幼儿园宝宝防漏吸管杯 儿童防摔防摔防呛学饮杯 鸭嘴杯BEDDYBEAR独角兽学饮杯
              </div>
              <div class="features2">
                <span>免费刻字</span>
                <span>送杯套杯刷</span>
              </div>
              <div class="promitionTag">
                <span>领券158-110</span>
              </div>
              <div class="price">
                <span style="font-size: 0.12rem"
                  >¥ <span style="font-size: 0.16rem">99.9</span></span>
                  <span style="color:#999999; font-size:.12rem;">137万+评价</span>
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAMAAACfWMssAAACTFBMVEUAAAD/////a2v8YTf3USD3Uhf4VRz7TBj5UR33Thb9TBr+ThX4Tyb8Sxf3SxT1UBr7TR35TRr4Thj6Rhb6UBP6Rxb7Rhb7VhT9TBX8aQ/6Rxf6SBX7YA/6Rhb6Rhb6RxX7XhH7Shb6Rhb7TRX6RxX6ShT7Rxb9aA/6SBf8YRD9Uhb6TBT7TRb6TBT7VhL8aA/7WRH8Yw/8aA75Rhf6TRX5Rhb7YRH7TBT7ag78YBD7UxP8aA78YRH8aQ77YBH5Rhf7WhH7ZRH6WBL7Rhj7UhT8Rxb8RRX7VBP7YRD7WRL8ag/7Zg/7XBP7VhP7URT6RxX4SBX6UxT8SBf9ZRH7UxT6Rxf6Shf9Zw79VRP6RRb8Zw78RRf7Zw/6TBb5Rhb////6TRT6TxP6ShX6UhP7XxD6XBH6WRH7XhD6VhP6TBT6URP6VBL6VhL6SRX7Yg/7Zw76WxH7YRD6WBL6SBf7Yw/6ZQ77ZA/7Zg/7ZQ/6RxX7YRH8oIT8lnn8m3b8aA78pIT8p4P6djz6cjz6YDP++fj9vqr8mHf8nnT6bTz7XBL7WhL++/n+9/X+9fH+4tj90Lv9xbD8sZz8poz7iWb7elP6ZT36aTz6XTD6bC76aC7+7ej+6+T+59/918391cv9ybj8uKH9tZf8qoT7jXD7lGf6flz6a0L6ZTD5ZC/5VSn5Uyb6UCD6YBr+/v7908T9z8P8q5X8r4/7oon7m4D7lXL6e1n6dFH7g0z6cUr7fEL+7+r9283928z8onr8ilT7dkT5WC36byz5Vxz6XBC12sQTAAAAXnRSTlMAAQIEDgoIFBAXGwwGHxgTER0a6iirdiUi8+7m3NbQtWQ49OnBiIJ/YU0++/fw8O/r6ufh3dzVzMq+vbWzpZmSjIt7WlJQSPPt5OTY1ayqnpyamXdycG9qaWdZTkM18tz/oAAABOFJREFUSMd9lmdfE0EQxtfk0iAhBaSJCvbee++993ojSpMgFyMhsRulqEgRUbBXOvbe2xdz9jaXvdydzAvekP/vmX1mn5slCTWAlslkOrhz24gZwydMGD5j3tYdeWaTSf4H+V8xyrl/YLYonjh2+OjRQ/n5+UeO+CdtXGFlbD+YJT1VxKLg4UMULEXSXzJlmYWjBph5zHSEFPAokqWlR/wlJWVlRWtzYx0bcauGiLE6yVo9JCuW+MuCRUWBDWPx9BqSWTKKQYyMgaUIomIweDUQKFzCRDWcMJBjvFVqjp8pFhYWL7ArJOdc2KYeZOagJAMLZmUwknOZg9QYH4dsTpmseAXBgqmM5H1yPZ2rXBHB47M8MZKNgZ+Pm4Nz5K5SsLi44NTx8gVORsoc+qkHuTl0jleLmGJ5xVLZW0K5VcrPexNaZYJ0HHHFgvLyitBYJClotioHrIYH77WKaA5tNVh0lSqeQsXK9VYzgvSeKTL3AeCp0TiYImu1MhTZjcckJrMwXQFbq+ugQX1z8mVFBFExEKAgVQxNs5tNxOxMF3k9gue9akV2xrISrlhREYqERzvNxGxJVYFPAT6IYs+Z06zOy3VBrtrPimJYmiyYiXOlqKoOgLfUJMP6UXyKtRqS9jmJNfFuV0GTKL59bgg+YeOIRMLSfCuxZMsEN/Ye/u1ubb2E1dnV1dl5G6utra0W4JnSakjKEkiemFDXAXoM8/gY4DfOUR6HJJ07QBRPuTsthnn8Bndj5kRCYUkaTbYkgjcBThvlsa8OmpSbQ8GFZIQmTtegySiPHwFqFcVwWDo3h8zUxOIB3DXK4xOAaAzEaUjSOpIq6tzpNshjI9TH8lhZGUHFLDJMA94AeK/PY7AeGgvj5khoKwe5O2/0eYzi+JU8yuM4p2tVvAYP9XnE8X+M5xHNkbJ05ogv4I4+jw+hro/nERWn4Tg09QrgF1Xsbe1ouVFz/nF149d79QCNPI/0jHPIZlHvTrsoNl+DhKr6zPNIXV1I0rXgJYBmUbzDkbsNL5peR/GDzPNIr9w4UVv11J2WR9ff1Nxoudj1R54H+8rxPEpjiS1bC76EL/r9SMG/PI9ZKcQ91MCdDzdv3sK6TOsiVjTapm41JM13E/dyLdgORvUdXeV5zHUTjy9Vu29eGoGPA4U8j5O9HmK3jRK1ZPsZuWpqas7GqvZZH4LxPC612YngdvHV2P9+jOdxaqZNIILHsUvPdRvuRyWP2x0egVjsNt9gDdbzAO58UvL4s6GqOkgV43nM8drsycQiuB1aY5sB4L6SxwYAeKfej5Fch1uwEGsySi7WfQXgnpJHemlfq/fjIh8KWomTSiYl3oKOKoAzSqweAdRFVftxrpcKOomZSqZkJB7z0rtP8Tz6nzVfVO3HnLQUKojbCiU9Dl8evwb97sc143wOT7IF1xxucrnZPK7Zz37MGZeEjaKgieADVW42KS3hnPy9ytLBLsDctCS5UbrKB5iwWZl0cW9171Xm6iIX5Wij8qtDbtaDpHcMb9cgjzm5lPMIFmyUgmoyM33Q/96rU5ZlelUcggpptzl8XlfayGyj9+qkJWkur89hs8c4BBUSz+l2oKgrY+/QYYn7cfW8PYglpTjc9mTOqUjBg6KIujJXjhw4e9DE8eMnDp+9aeSKDBdiKOcRVNw/H+/ynRJ1flsAAAAASUVORK5CYII="
                  alt=""
                />
              </div>
              <div class="shop">
                <p class="shop_info">茶杯店铺杯具熊官方旗舰店</p>
                <p class="into_shop">进店 ></p>
              </div>
            </li>
            <li class="other">
              <div class="img">
                <img
                  src="https://imgservice.suning.cn/uimg1/b2c/image/VLq-GSqfxK9fnqWWLi4nRg.png?format=400h_400w_4e_80q.webp"
                  alt=""
                />
              </div>
              <div class="text">
                杯具熊儿童水杯幼儿园宝宝防漏吸管杯 儿童防摔防摔防呛学饮杯 鸭嘴杯BEDDYBEAR独角兽学饮杯
              </div>
              <div class="features2">
                <span>免费刻字</span>
                <span>送杯套杯刷</span>
              </div>
              <div class="promitionTag">
                <span>领券158-110</span>
              </div>
              <div class="price">
                <span style="font-size: 0.12rem"
                  >¥ <span style="font-size: 0.16rem">99.9</span></span>
                  <span style="color:#999999; font-size:.12rem;">137万+评价</span>
                <img
                  src="data:image/png;base64,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"
                  alt=""
                />
              </div>
              <div class="shop">
                <p class="shop_info">茶杯店铺杯具熊官方旗舰店</p>
                <p class="into_shop">进店 ></p>
              </div>
            </li>
            <li class="other">
              <div class="img">
                <img
                  src="https://imgservice.suning.cn/uimg1/b2c/image/VLq-GSqfxK9fnqWWLi4nRg.png?format=400h_400w_4e_80q.webp"
                  alt=""
                />
              </div>
              <div class="text">
                杯具熊儿童水杯幼儿园宝宝防漏吸管杯 儿童防摔防摔防呛学饮杯 鸭嘴杯BEDDYBEAR独角兽学饮杯
              </div>
              <div class="features2">
                <span>免费刻字</span>
                <span>送杯套杯刷</span>
              </div>
              <div class="promitionTag">
                <span>领券158-110</span>
              </div>
              <div class="price">
                <span style="font-size: 0.12rem"
                  >¥ <span style="font-size: 0.16rem">99.9</span></span>
                  <span style="color:#999999; font-size:.12rem;">137万+评价</span>
                <img
                  src="data:image/png;base64,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"
                  alt=""
                />
              </div>
              <div class="shop">
                <p class="shop_info">茶杯店铺杯具熊官方旗舰店</p>
                <p class="into_shop">进店 ></p>
              </div>
            </li>
            <li class="other">
              <div class="img">
                <img
                  src="https://imgservice.suning.cn/uimg1/b2c/image/VLq-GSqfxK9fnqWWLi4nRg.png?format=400h_400w_4e_80q.webp"
                  alt=""
                />
              </div>
              <div class="text">
                杯具熊儿童水杯幼儿园宝宝防漏吸管杯 儿童防摔防摔防呛学饮杯 鸭嘴杯BEDDYBEAR独角兽学饮杯
              </div>
              <div class="features2">
                <span>免费刻字</span>
                <span>送杯套杯刷</span>
              </div>
              <div class="promitionTag">
                <span>领券158-110</span>
              </div>
              <div class="price">
                <span style="font-size: 0.12rem"
                  >¥ <span style="font-size: 0.16rem">99.9</span></span>
                  <span style="color:#999999; font-size:.12rem;">137万+评价</span>
                <img
                  src="data:image/png;base64,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"
                  alt=""
                />
              </div>
              <div class="shop">
                <p class="shop_info">茶杯店铺杯具熊官方旗舰店</p>
                <p class="into_shop">进店 ></p>
              </div>
            </li>
            <li class="other">
              <div class="img">
                <img
                  src="https://imgservice.suning.cn/uimg1/b2c/image/VLq-GSqfxK9fnqWWLi4nRg.png?format=400h_400w_4e_80q.webp"
                  alt=""
                />
              </div>
              <div class="text">
                杯具熊儿童水杯幼儿园宝宝防漏吸管杯 儿童防摔防摔防呛学饮杯 鸭嘴杯BEDDYBEAR独角兽学饮杯
              </div>
              <div class="features2">
                <span>免费刻字</span>
                <span>送杯套杯刷</span>
              </div>
              <div class="promitionTag">
                <span>领券158-110</span>
              </div>
              <div class="price">
                <span style="font-size: 0.12rem"
                  >¥ <span style="font-size: 0.16rem">99.9</span></span>
                  <span style="color:#999999; font-size:.12rem;">137万+评价</span>
                <img
                  src="data:image/png;base64,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"
                  alt=""
                />
              </div>
              <div class="shop">
                <p class="shop_info">茶杯店铺杯具熊官方旗舰店</p>
                <p class="into_shop">进店 ></p>
              </div>
            </li>
            <li class="other">
              <div class="img">
                <img
                  src="https://imgservice.suning.cn/uimg1/b2c/image/VLq-GSqfxK9fnqWWLi4nRg.png?format=400h_400w_4e_80q.webp"
                  alt=""
                />
              </div>
              <div class="text">
                杯具熊儿童水杯幼儿园宝宝防漏吸管杯 儿童防摔防摔防呛学饮杯 鸭嘴杯BEDDYBEAR独角兽学饮杯
              </div>
              <div class="features2">
                <span>免费刻字</span>
                <span>送杯套杯刷</span>
              </div>
              <div class="promitionTag">
                <span>领券158-110</span>
              </div>
              <div class="price">
                <span style="font-size: 0.12rem"
                  >¥ <span style="font-size: 0.16rem">99.9</span></span>
                  <span style="color:#999999; font-size:.12rem;">137万+评价</span>
                <img
                  src="data:image/png;base64,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"
                  alt=""
                />
              </div>
              <div class="shop">
                <p class="shop_info">茶杯店铺杯具熊官方旗舰店</p>
                <p class="into_shop">进店 ></p>
              </div>
            </li>

          </ul>
        </div>
      </div>
    </div>
</template>

<script>
    import Swiper from "swiper";
    import "swiper/css/swiper.css";
    import "@/assets/swiper.scss";
    export default {
      name: "Home",
      data() {
        return {
          isShow:false,
          show: 1,
        };
      },
      methods:{
        scroll(){
          // console.log(window.pageYOffset);
          if(window.pageYOffset > 10){
            this.isShow = true
          }else{
            this.isShow = false
            
          }
        }
      },
      mounted() {
        new Swiper("#swiper1", {
          loop: true, // 循环模式选项

          // 如果需要分页器
          pagination: {
            el: ".swiper-pagination",
            type: "fraction",
          },
          autoplay: {
            delay: 3000,
            stopOnLastSlide: false,
            disableOnInteraction: true,
          },
        });
        new Swiper("#swiper2", {
          loop: false, // 循环模式选项

          // 如果需要分页器
          pagination: {
            el: ".swiper-pagination",
          },
        });
        window.addEventListener('scroll',this.scroll);
      },
      destroyed(){
        window.removeEventListener('scroll',this.scroll);

      }
    };
</script>
<style lang="scss" scoped>
    .home {
      margin: 0 auto;
      width: 3.75rem;
      overflow: hidden;
    }
    
    #header1 {
      width: 3.75rem;
      margin:0 auto;
      .header_{
        width: 100%;
        height: 0.45rem;
        display: flex;
        justify-content: space-between;
        .head-left{
          width: 0.4rem;
          height: 0.45rem;
          // background: red;
          display: flex;
          img {
            width: 0.2rem;
            margin: auto;
          }
        }
        .head-right {
          width: 1rem;
          height: 0.45rem;
          // background: red;
          display: flex;
          img {
            width: 0.2rem;
            margin: auto;
          }
        }
        .head-center {
          width: 2.35rem;
          height: 0.45rem;
          text-align: center;
          // line-height: 0.45rem;
          font-size: 0.16rem;
          img:nth-child(1){
            width: .88rem;
            height: .21rem;
            display: inline-block;
            margin-top: .12rem;
            margin-left: -0.7rem;
            margin-right: .18rem;
          }
          img:nth-child(2){
            width: .56rem;
            height: .24rem;
            display: inline-block;
            margin-top: .1rem;
          }
        }
      }
      .search {
        width: 3.75rem;
        height: 0.44rem;
        margin:0 auto;
        .search-bar {
          width: 3.45rem;
          height: 0.3rem;
          margin: 0.05rem auto auto auto;
          background: #fff;
          display: flex;
          align-items: center;
          border-radius: 0.08rem;
          border:.01rem solid rgb(71,179,18);
          overflow: hidden;
          img {
            width: 0.2rem;
            height: 0.2rem;
            margin: auto 0.07rem auto 0.1rem;
          }
          input {
            height: 100%;
            width: 3rem;
            border: none !important;
            outline: none;
            font-size: 0.12rem;
          }
        }
      }
      #slideshow {
        width: 3.75rem;
        height: .45rem;
        margin:0 auto;
        #sticky{
          width: 3.75rem;
          height: .45rem;
          margin:0 auto;
          .app-scroller{
            width: 3.75rem;
            height: .45rem;
            margin:0 auto;
            ul{
              width: 3.75rem;
              display: flex;
              flex-wrap: nowrap;
              justify-content: space-evenly;
              overflow-x: scroll;
              li{
                height: .45rem;
                flex-shrink: 0;
                padding: 0 .1rem 0 .1rem;
                line-height: .45rem;
                white-space: nowrap;
                font-size: .15rem;
              }
            }
          }
        }
      }
    }
    #header2 {
      width: 3.75rem;
      margin:0 auto;
      position: fixed;
      z-index:99;
      top: 0;
      background-color: #F7F7F7;
      .header-{
        width: 100%;
        height: 0.45rem;
        display: flex;
        justify-content: space-between;
        .head_left{
          width: 0.4rem;
          height: 0.45rem;
          display: flex;
          img {
            width: 0.2rem;
            margin: auto;
          }
        }
        .head_right {
          width: 1rem;
          height: 0.45rem;
          display: flex;
          img {
            width: 0.2rem;
            margin: auto;
          }
        }
        .head_center {
          width: 2.35rem;
          height: 0.45rem;
          text-align: center;
          font-size: 0.16rem;
          display: flex;
          flex-wrap: nowrap;
          justify-content: space-between;
          .search_ {
            width: 1.6rem;
            height: 0.30rem;
            margin:0 auto;
            margin-right: .2rem;
            .search_bar {
              width: 1.6rem;
              height: 0.3rem;
              margin: 0.06rem auto auto auto;
              background: #fff;
              display: flex;
              align-items: center;
              border-radius: 0.08rem;
              border:.01rem solid rgb(71,179,18);
              overflow: hidden;
              img {
                width: 0.2rem;
                height: 0.2rem;
                margin: auto 0.07rem auto 0.1rem;
              }
              input {
                height: 100%;
                width: 3rem;
                border: none !important;
                outline: none;
                font-size: 0.12rem;
                text-overflow: ellipsis;
                white-space: nowrap;
                overflow: hidden;
                color: #999;
                font-size: .13rem;
              }
            }
          }
          .logo2{
            width: .56rem;
            height: .24rem;
            display: inline-block;
            margin-top: .1rem;
          }
        }
      }
      #slideshow_ {
        width: 3.75rem;
        height: .45rem;
        margin:0 auto;

        #sticky_{
          width: 3.75rem;
          height: .45rem;
          margin:0 auto;
          .app-scroller_{
            width: 3.75rem;
            height: .45rem;
            margin:0 auto;
            ul{
              width: 3.75rem;
              display: flex;
              flex-wrap: nowrap;
              justify-content: space-evenly;
              overflow-x: scroll;
              li{
                height: .45rem;
                flex-shrink: 0;
                padding: 0 .1rem 0 .1rem;
                line-height: .45rem;
                white-space: nowrap;
                font-size: .15rem;
              }
            }
          }
        }
      }
    }
    
    #banner-part {
      width: 100%;
      height: 1rem;
      margin: 0 auto;
      .swiper-container {
        width: 100%;
        height: 100%;
        .swiper-wrapper {
          width: 100%;
          height: 100%;
          .swiper-slide {
            width: 100%;
            height: 100%;
            .container {
              width: 3.75rem;
              margin: 0 auto;
              height: 100%;
              // background: red;
              display: flex;
              flex-wrap: nowrap;
              justify-content: space-evenly;
              overflow-x: scroll;
              li {
                width: 0.75rem;
                height: 0.9rem;
                flex-shrink: 0;
                display: flex;
                flex-direction: column;
                justify-content: space-around;
                align-items: center;
                font-size: 0.12rem;
                margin-top: 0rem;
                white-space: nowrap;
                img {
                  width: 0.5rem;
                }
              }
            }
          }
        }
      }
    }
    .lun {
      width: 3.51rem;
      height: .9rem;
      margin:0 auto;
      .swiper-container {
        width: 100%;
        height: 100%;
        .swiper-wrapper {
          width: 100%;
          height: 100%;
          .swiper-slide {
            width: 100%;
            height: 100%;
            img {
              position: relative;
              width: 100%;
            }
          }
        }
      }
    }
    .one_pic{
      width: 3.75rem;
      height: .96rem;
      margin:0 auto;
      div{
        width: 3.5rem;
        height: .96rem;
        margin:0 auto;
        img{
          width: 100%;
          height: 100%;
        }
      }
    }
    #rush-buy {
      width: 3.51rem;
      height: auto;
      margin:0 auto;
      .rush-buy-title {
        width: 3.51rem;
        height: 0.34rem;
        margin:0 auto;
        img {
          width: 100%;
        }
      }
      .rush-buy-shops {
        width: 100%;
        height: 2.04rem;
        background: #fff;
        border-radius: .12rem;
        .rush-buy-shops-container {
          height: 2.04rem;
          display: flex;
          width: auto;
          overflow-x: scroll;
          li {
            width: 1.3rem;
            height: 1.9rem;
            margin: 0 0.03rem auto;
            // background: blue;
            flex-shrink: 0;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            .first {
              width: 1.1rem;
              height: 1.1rem;
              border-top: 0.01rem solid transparent;
              overflow: hidden;
              .img {
                width: 1.1rem;
                height: 0.94rem;
                background: url("https://imgservice2.suning.cn/uimg1/b2c/image/ddiBPH9s-X91eI855uplvQ.jpg?format=400h_400w_4e_80q.webp")
                  no-repeat;
                background-size: 100%;
              }
            }
            .jieshao {
              width: 1.1rem;
              height: 0.25rem;
              // background: red;
              font-size: 0.12rem;
              overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-box-orient: vertical;
              -webkit-line-clamp:2;
              color: #505050;
              flex-shrink: 0;
            }
            .price {
              width: 1.1rem;
              height: 0.46rem;
              // background: red;
              display: flex;
              justify-content: space-between;
              .num {
                width: 0.32rem;
                height: 0.35rem;
                .ziying{
                  width: .25rem;
                  height: .15rem;
                  background-color: #FF5500;
                  font-size: .1rem !important;
                  line-height: .15rem;
                  color: white;
                  border-radius: .02rem;
                }
                .daoshou{
                  width: .36rem;
                  height: .15rem;
                  background-color: #FFEEE5;
                  font-size: .1rem !important;
                  line-height: .15rem;
                  color: #FF894E;
                  border-radius: .02rem;

                }
              }
              .btn {
                width: 0.23rem;
                height: 0.35rem;
                // background: cyan;
                img {
                  width: 0.23rem;
                  margin-top: 0.12rem;
                }
              }
            }
          }
        }
      }
    }
    #tuijian {
      width: 3.75rem;
      margin: 0 auto;
      
      .tj-title {
        width: 3.75rem;
        height: 0.45rem;
        margin:0 auto;
        img {
          width: 100%;
          height: 0.45rem;
        }
      }
      .tj-shops {
        width: 3.5rem;
        margin: 0 auto;
        ul{
          width: 3.5rem;
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
        }
        li {
          width: 1.65rem;
          margin: 0.094rem 0.045rem auto;
          float: left;
          background-color: rgb(255,255,255);
          border-radius: .08rem;
        }
        .other > .img {
          width: 1.65rem;
          height: 1.65rem;
          margin-bottom: 0.03rem;
          img {
            width: 100%;
          }
        }
        .other > .text {
          width: 1.5rem;
          height: 0.37rem;
          margin: 0 auto;
          font-size: 0.14rem;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          overflow: hidden;
          color: #222;
          margin-top: .1rem;
          line-height: .18rem;
        }
        .other>.features2{
          font-size: .12rem;
          color: #FF5500;
          margin-top: .03rem;
          width: 1.5rem;
          text-align: left;
          margin-left: .07rem;
          span:nth-child(2){
            margin-left: .04rem;
          }
        }
        .other>.promitionTag{
            width: 0.72rem;
            height: .16rem;
            line-height: .16rem;
            border: .01rem solid #FF7029;
            font-size: .12rem;
            color: #FF7029;
            margin-left: .07rem;
            margin-top: .06rem;
        }
        .other > .price {
          width: 1.54rem;
          height: 0.49rem;
          margin-left: 0.04rem;
          display: flex;
          flex-wrap: nowrap;
          justify-content: space-between;
          align-items: center;
          color: #FF3300;
          img {
            width: 0.23rem;
          }
        }
        .other>.shop{
          width: 1.5rem;
          height: .27rem;
          border-top: .01rem solid #e6e6e6;
          margin:0 auto;
          display: flex;
          flex-wrap: nowrap;
          justify-content: space-between;
          line-height: .27rem;
          .shop_info{
            width: 1.07rem;
            font-size: .12rem;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
          }
          .into_shop{
            font-size: .12rem;
            color: #999999;
          }
        }
      }
    }
</style>
