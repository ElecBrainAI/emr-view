<script setup>
// import HelloWorld from './components/HelloWorld.vue'
// import TheWelcome from './components/TheWelcome.vue'
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'
import 'https://unpkg.com/phosphor-icons';
import "./fonts/NotoSansKR.css";
import { FwbButton } from 'flowbite-vue'

onMounted(() => {
    initFlowbite();
})
</script>

<template>
  <body>
    <header class="header">
      <div class="header-content">
        <div class="header-title">
          <div class="header-logo">
            <a href="#">
              <div>
                <img src="https://assets.codepen.io/285131/untitled-ui-icon.svg"  alt=""/>
              </div>
            </a>
          </div>
          <div class="header-name">
            EMR
          </div>
        </div>
        <div class="header-navigation">
          <div class="search">
            <input type="text" placeholder="환자검색(이름/차트번호/생년월일/휴대폰번호)" />
            <button type="submit">
              <i class="ph-magnifying-glass-bold"></i>
            </button>
          </div>
          <div class="header-navigation-actions">
            <a href="#" class="icon-button">
              <i class="ph-gear-bold"></i>
            </a>
            <a href="#" class="icon-button">
              <i class="ph-bell-bold"></i>
            </a>
            <a href="#" class="avatar">
              <img src="https://assets.codepen.io/285131/hat-man.png" alt="" />
            </a>
          </div>
        </div>
        <a href="#" class="button">
          <i class="ph-list-bold"></i>
          <span>Menu</span>
        </a>
      </div>
    </header>
    <main class="main">
      <div class="content-header">
        <div class="content-header-intro">
<!--            <h2>Intergrations and connected apps</h2>-->
<!--            <p>Supercharge your workflow and connect the tool you use every day.</p>-->
        </div>
        <div class="content-header-actions">
          <a href="#" class="button">
            <i class="ph-faders-bold"></i>
            <span>Filters</span>
          </a>
          <a href="#" class="button">
            <i class="ph-plus-bold"></i>
            <span>Request integration</span>
          </a>
        </div>
      </div>
      <!-- SIDEBAR -->
<!--      <aside id="logo-sidebar" class="sidebar" aria-label="Sidebar">-->
<!--        <div class="sidebar-content">-->
<!--          <div class="sidebar-menu">-->
<!--            <ul class="space-y-2">-->
<!--              <li>-->
<!--                <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">-->
<!--                  <svg class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">-->
<!--                    <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z"/>-->
<!--                    <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z"/>-->
<!--                  </svg>-->
<!--                </a>-->
<!--              </li>-->
<!--              <li>-->
<!--                <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">-->
<!--                  <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">-->
<!--                    <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z"/>-->
<!--                  </svg>-->
<!--                </a>-->
<!--              </li>-->
<!--              <li>-->
<!--                <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">-->
<!--                  <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">-->
<!--                    <path d="m17.418 3.623-.018-.008a6.713 6.713 0 0 0-2.4-.569V2h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2H9.89A6.977 6.977 0 0 1 12 8v5h-2V8A5 5 0 1 0 0 8v6a1 1 0 0 0 1 1h8v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h6a1 1 0 0 0 1-1V8a5 5 0 0 0-2.582-4.377ZM6 12H4a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z"/>-->
<!--                  </svg>-->
<!--                </a>-->
<!--              </li>-->
<!--              <li>-->
<!--                <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">-->
<!--                  <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">-->
<!--                    <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z"/>-->
<!--                  </svg>-->
<!--                </a>-->
<!--              </li>-->
<!--              <li>-->
<!--                <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">-->
<!--                  <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">-->
<!--                    <path d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z"/>-->
<!--                  </svg>-->
<!--                </a>-->
<!--              </li>-->
<!--              <li>-->
<!--                <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">-->
<!--                  <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 16">-->
<!--                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"/>-->
<!--                  </svg>-->
<!--                </a>-->
<!--              </li>-->
<!--              <li>-->
<!--                <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">-->
<!--                  <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">-->
<!--                    <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.96 2.96 0 0 0 .13 5H5Z"/>-->
<!--                    <path d="M6.737 11.061a2.961 2.961 0 0 1 .81-1.515l6.117-6.116A4.839 4.839 0 0 1 16 2.141V2a1.97 1.97 0 0 0-1.933-2H7v5a2 2 0 0 1-2 2H0v11a1.969 1.969 0 0 0 1.933 2h12.134A1.97 1.97 0 0 0 16 18v-3.093l-1.546 1.546c-.413.413-.94.695-1.513.81l-3.4.679a2.947 2.947 0 0 1-1.85-.227 2.96 2.96 0 0 1-1.635-3.257l.681-3.397Z"/>-->
<!--                    <path d="M8.961 16a.93.93 0 0 0 .189-.019l3.4-.679a.961.961 0 0 0 .49-.263l6.118-6.117a2.884 2.884 0 0 0-4.079-4.078l-6.117 6.117a.96.96 0 0 0-.263.491l-.679 3.4A.961.961 0 0 0 8.961 16Zm7.477-9.8a.958.958 0 0 1 .68-.281.961.961 0 0 1 .682 1.644l-.315.315-1.36-1.36.313-.318Zm-5.911 5.911 4.236-4.236 1.359 1.359-4.236 4.237-1.7.339.341-1.699Z"/>-->
<!--                  </svg>-->
<!--                </a>-->
<!--              </li>-->
<!--            </ul>-->
<!--          </div>-->
<!--         </div>-->
<!--      </aside>-->
      <div class="responsive-wrapper">
        <div class="content">
          <div class="content-main">
            <div class="content-grid">
              <div class="left-content">
                <div class="treatment-bar">

                  <button class="search-drop-button" id="dropdownSearchButton" data-dropdown-toggle="dropdownSearch" data-dropdown-placement="bottom" type="button">
                    <span>진료실 선택</span>
                    <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                    </svg>
                  </button>

                  <!-- Dropdown menu -->
                  <div id="dropdownSearch" class="z-10 hidden bg-white rounded-lg shadow w-60 dark:bg-gray-700">
                      <div class="p-3">
                        <label for="input-group-search" class="sr-only">Search</label>
                        <div class="relative">
                          <div class="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                            </svg>
                          </div>
                          <input type="text" id="input-group-search" class="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="진료실 검색">
                        </div>
                      </div>
                      <ul class="h-48 px-3 pb-3 overflow-y-auto text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownSearchButton">
                        <li>
                          <div class="flex items-center ps-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                            <input id="checkbox-item-11" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                            <label for="checkbox-item-11" class="w-full py-2 ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">전체</label>
                          </div>
                        </li>
                        <li>
                          <div class="flex items-center ps-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                              <input checked id="checkbox-item-12" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                              <label for="checkbox-item-12" class="w-full py-2 ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">진료실1 백지영 내과</label>
                            </div>
                        </li>
                        <li>
                          <div class="flex items-center ps-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                            <input id="checkbox-item-13" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                            <label for="checkbox-item-13" class="w-full py-2 ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">진료실2 김다영 내과</label>
                          </div>
                        </li>
                        <li>
                          <div class="flex items-center ps-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                            <input id="checkbox-item-14" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                            <label for="checkbox-item-14" class="w-full py-2 ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">진료실3 이지원 내과</label>
                          </div>
                        </li>
                        <li>
                          <div class="flex items-center ps-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                            <input id="checkbox-item-15" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                            <label for="checkbox-item-15" class="w-full py-2 ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">진료실4 한지인 내과</label>
                          </div>
                        </li>
                        <li>
                          <div class="flex items-center ps-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                            <input id="checkbox-item-16" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                            <label for="checkbox-item-16" class="w-full py-2 ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">Leslie Livingston</label>
                          </div>
                        </li>
                              <li>
                          <div class="flex items-center ps-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                            <input id="checkbox-item-17" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                            <label for="checkbox-item-17" class="w-full py-2 ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">Roberta Casas</label>
                          </div>
                        </li>
                      </ul>
                      <a href="#" class="flex items-center p-3 text-sm font-medium text-red-600 border-t border-gray-200 rounded-b-lg bg-gray-50 dark:border-gray-600 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-red-500 hover:underline">
                        <svg class="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                          <path d="M6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Zm11-3h-6a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2Z"/>
                        </svg>
                        진료실 삭제
                    </a>
                  </div>
                  <div class="button-group">
                    <fwb-button class="button-page" color="alternative" pill square>
                      <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 1 1.3 6.326a.91.91 0 0 0 0 1.348L7 13"/>
                      </svg>
                    </fwb-button>
                    <div class="page-number">1/3</div>
                    <fwb-button class="button-page" color="alternative" pill square>
                      <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"/>
                      </svg>
                    </fwb-button>
                  </div>
                </div>
                <div class="card-grid">
                  <article class="card">
                    <div class="card-header">
                      <div>
                        <span><img src="https://assets.codepen.io/285131/zeplin.svg" alt=""/></span>
                        <h3>Zeplin</h3>
                      </div>
                      <label class="toggle">
                        <input type="checkbox" checked>
                        <span></span>
                      </label>
                    </div>
                    <div class="card-body">
                      <p>Collaboration between designers and developers.</p>
                    </div>
                    <div class="card-footer">
                      <a href="#">View integration</a>
                    </div>
                  </article>
                  <article class="card">
                    <div class="card-header">
                      <div>
                        <span><img src="https://assets.codepen.io/285131/github.svg" alt=""/></span>
                        <h3>GitHub</h3>
                      </div>
                      <label class="toggle">
                        <input type="checkbox" checked>
                        <span></span>
                      </label>
                    </div>
                    <div class="card-body">
                      <p>Link pull requests and automate workflows.</p>
                    </div>
                    <div class="card-footer">
                      <a href="#">View integration</a>
                    </div>
                  </article>
                  <article class="card">
                    <div class="card-header">
                      <div>
                        <span><img src="https://assets.codepen.io/285131/figma.svg" alt=""/></span>
                        <h3>Figma</h3>
                      </div>
                      <label class="toggle">
                        <input type="checkbox" checked>
                        <span></span>
                      </label>
                    </div>
                    <div class="card-body">
                      <p>Embed file previews in projects.</p>
                    </div>
                    <div class="card-footer">
                      <a href="#">View integration</a>
                    </div>
                  </article>
                  <article class="card">
                    <div class="card-header">
                      <div>
                        <span><img src="https://assets.codepen.io/285131/zapier.svg" alt=""/></span>
                        <h3>Zapier</h3>
                      </div>
                      <label class="toggle">
                        <input type="checkbox">
                        <span></span>
                      </label>
                    </div>
                    <div class="card-body">
                      <p>Build custom automations and integrations with apps.</p>
                    </div>
                    <div class="card-footer">
                      <a href="#">View integration</a>
                    </div>
                  </article>
                </div>
              </div>
              <div class="card-grid">
                <article class="card">
                  <div class="card-header">
                    <div>
                      <span><img src="https://assets.codepen.io/285131/zeplin.svg" alt=""/></span>
                      <h3>Zeplin</h3>
                    </div>
                    <label class="toggle">
                      <input type="checkbox" checked>
                      <span></span>
                    </label>
                  </div>
                  <div class="card-body">
                    <p>Collaboration between designers and developers.</p>
                  </div>
                  <div class="card-footer">
                    <a href="#">View integration</a>
                  </div>
                </article>
                <article class="card">
                  <div class="card-header">
                    <div>
                      <span><img src="https://assets.codepen.io/285131/github.svg" alt=""/></span>
                      <h3>GitHub</h3>
                    </div>
                    <label class="toggle">
                      <input type="checkbox" checked>
                      <span></span>
                    </label>
                  </div>
                  <div class="card-body">
                    <p>Link pull requests and automate workflows.</p>
                  </div>
                  <div class="card-footer">
                    <a href="#">View integration</a>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </body>
</template>

<style scoped>
:root {
  --c-text-primary: #282a32;
  --c-text-secondary: #686b87;
  --c-text-action: #404089;
  --c-accent-primary: #434ce8;
  --c-border-primary: #eff1f6;
  --c-background-primary: #ffffff;
  --c-background-secondary: #fdfcff;
  --c-background-tertiary: #ecf3fe;
  --c-background-quaternary: #e9ecf4;
}


html, body {
  line-height: 1.5;
  //min-height: 100vh;
  font-family: 'Noto Sans KR', sans-serif;
  background-color: var(--c-background-secondary);
  color: var(--c-text-primary);
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: fixed;
  padding: 0;
  margin: 0;
}

img {
  display: block;
  max-width: 100%;
}

:focus {
  outline: 0;
}

.responsive-wrapper {
  width: 100%;
  height: 84vh;
  //max-width: 1280px;
  //margin-left: auto;
  //margin-right: auto;
  //margin: 0.75rem;
  margin-inline: auto;
  overflow: hidden;
}

.sidebar {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 40;
  height: 100%;
  width: 4rem;
  padding-top: 5rem;
  transition-property: transform;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

.sidebar-content {
  height: 100%;
  overflow-y: auto;
  --tw-bg-opacity: 1;
  padding: 0.75rem 0.75rem 1rem 0.75rem;
}

.sidebar-content ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.sidebar-menu {
  background-color: white;
  border-radius: 10px;
}

@media (min-width: 640px) {
  .sidebar {
    --tw-translate-x: 0px;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y))
               rotate(var(--tw-rotate))
               skewX(var(--tw-skew-x))
               skewY(var(--tw-skew-y))
               scaleX(var(--tw-scale-x))
               scaleY(var(--tw-scale-y));
  }
}

.header {
  display: flex;
  align-items: center;
  height: 80px;
  border-bottom: 1px solid var(--c-border-primary);
  background-color: var(--c-background-primary);
  overflow: hidden;
}

.header-content {
  width: 100%;
  display: flex;
  align-items: center;
  margin-left: 0.75rem;
  margin-right: 0.75rem;
}
.header-content > a {
  display: none;
}
@media (max-width: 1200px) {
  .header-content {
    justify-content: space-between;
  }
  .header-content > a {
    display: inline-flex;
  }
}

.header-title {
  display: flex;
  margin-right: 2.5rem;
}

.header-logo {
  margin-right: 0.75rem;
}
.header-logo a {
  display: flex;
  align-items: center;
}
.header-logo a div {
  flex-shrink: 0;
  position: relative;
}
.header-logo a div:after {
  display: block;
  content: "";
  position: absolute;
  left: 0;
  top: auto;
  right: 0;
  bottom: 0;
  overflow: hidden;
  height: 50%;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  background-color: rgba(255, 255, 255, 0.2);
  -webkit-backdrop-filter: blur(4px);
          backdrop-filter: blur(4px);
}

.header-name {
  font-size: 1.3em;
  font-weight: 700;
  align-items: center;
}

.header-navigation {
  display: flex;
  flex-grow: 1;
  align-items: center;
  justify-content: space-between;
}

.content-header {
  //background-color: #4A4F5E;
}

@media (max-width: 1200px) {
  .header-navigation {
    display: none;
  }
  .header-title {
    margin-left: 0.75em;
  }
}

.header-navigation-actions {
  display: flex;
  align-items: center;
}
.header-navigation-actions > .avatar {
  margin-left: 0.75rem;
}
.header-navigation-actions > .icon-button + .icon-button {
  margin-left: 0.25rem;
}
.header-navigation-actions > .button + .icon-button {
  margin-left: 1rem;
}

.button {
  font: inherit;
  //color: inherit;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0 1em;
  height: 40px;
  border-radius: 8px;
  line-height: 1;
  border: 2px solid var(--c-border-primary);
  color: var(--c-text-action);
  font-size: 0.875rem;
  transition: 0.15s ease;
  background-color: var(--c-background-primary);
}
.button i {
  margin-right: 0.5rem;
  font-size: 1.25em;
}
.button span {
  font-weight: 500;
}
.button:hover, .button:focus {
  border-color: var(--c-accent-primary);
  color: var(--c-accent-primary);
}

.icon-button {
  font: inherit;
  //color: inherit;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 8px;
  color: var(--c-text-action);
  transition: 0.15s ease;
}
.icon-button i {
  font-size: 1.25em;
}
.icon-button:focus, .icon-button:hover {
  background-color: var(--c-background-tertiary);
  color: var(--c-accent-primary);
}

.avatar {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  overflow: hidden;
}

.main {
  background-color: rgb(244, 244, 244);
  width: 100%;
  height: 100%;
  margin-inline: auto;
}

.search {
  position: relative;
  display: flex;
  align-items: center;
  margin: 0 auto;
  width: 100%;
  max-width: 498px;
}
.search input {
  font: inherit;
  //color: inherit;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0 1em 0 36px;
  height: 35px;
  border-radius: 8px;
  border: 2px solid var(--c-border-primary);
  color: var(--c-text-action);
  font-size: 0.775rem;
  transition: 0.15s ease;
  width: 100%;
  line-height: 1;
  background-color: #F4F4F4;
  text-align: center;
}
.search input::-moz-placeholder {
  color: var(--c-text-action);
}
.search input:-ms-input-placeholder {
  color: var(--c-text-action);
}
.search input::placeholder {
  color: var(--c-text-action);
}
.search input:focus, .search input:hover {
  border-color: var(--c-accent-primary);
}
.search button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 0;
  background-color: transparent;
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 1.25em;
  color: var(--c-text-action);
  padding: 0;
  height: 40px;
}

.content-header {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  //padding-top: 3rem;
  margin-top: -1px;
  border-top: 1px solid var(--c-border-primary);
}

.content-header-intro h2 {
  font-size: 1.25rem;
  font-weight: 600;
}
.content-header-intro p {
  color: var(--c-text-secondary);
  margin-top: 0.25rem;
  font-size: 0.875rem;
  margin-bottom: 1rem;
}

@media (min-width: 800px) {
  .content-header-actions a:first-child {
    display: none;
  }
}

.content {
  width: 100%;
  height: 100%;
  border-top: 1px solid var(--c-border-primary);
  display: flex;
  align-items: flex-start;
  margin-inline: auto;
}

.content-main {
  width: 100%;
  height: 100%;
  //padding-top: 2rem;
  //padding-bottom: 6rem;
  flex-grow: 1;
  margin-inline: auto;
}

.content-grid {
  display: grid;
  width: 100%;
  height: 100%;
  flex-grow: 1;
  grid-template-columns: repeat(2, 1fr);
  padding: 0.75rem;
  justify-content: space-between;
  gap: 0.75rem;
  margin-inline: auto;
}

.left-content {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  column-gap: 1rem;
}

.treatment-bar {
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
  margin-bottom: 0.35rem;
  justify-content: space-between;
}

.button-group {
  display: inline-flex;
}

.button-page{
  display: flex;
  align-items: center;
  align-self: center;
  background-color: white;
  border: 2px solid #767577;
  padding: 0.5rem;
  text-transform: none;
}

.button-page :hover{
}



.button-page svg {
  padding: 0;
  margin: 0;
  color: #767577;
}

.page-number {
  display: flex;
  margin-left: 0.75rem;
  margin-right: 0.75rem;
  font-weight: 400;
  color: #777679;
  font-size: 0.8em;
  align-items: center;
  margin-bottom: 0.2rem;
}

.card-grid {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  -moz-column-gap: 0.75rem;
       column-gap: 0.75rem;
  row-gap: 0.75rem;
  flex-grow: 1;
}
@media (min-width: 600px) {
  .card-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (min-width: 1200px) {
  .card-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

.card {
  background-color: #FFFFFF;
  //box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.05), 0 5px 15px 0 rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.card-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 1.5rem 1.25rem 1rem 1.25rem;
}
.card-header div {
  display: flex;
  align-items: center;
}
.card-header div span {
  width: 40px;
  height: 40px;
  border-radius: 8px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.card-header div span img {
  max-height: 100%;
}
.card-header div h3 {
  margin-left: 0.75rem;
  font-weight: 500;
}

.toggle span {
  display: block;
  width: 40px;
  height: 24px;
  border-radius: 99em;
  background-color: var(--c-background-quaternary);
  box-shadow: inset 1px 1px 1px 0 rgba(0, 0, 0, 0.05);
  position: relative;
  transition: 0.15s ease;
}
.toggle span:before {
  content: "";
  display: block;
  position: absolute;
  left: 3px;
  top: 3px;
  height: 18px;
  width: 18px;
  background-color: var(--c-background-primary);
  border-radius: 50%;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.15);
  transition: 0.15s ease;
}
.toggle input {
  clip: rect(0 0 0 0);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
}
.toggle input:checked + span {
  background-color: var(--c-accent-primary);
}
.toggle input:checked + span:before {
  transform: translateX(calc(100% - 2px));
}
.toggle input:focus + span {
  box-shadow: 0 0 0 4px var(--c-background-tertiary);
}

.card-body {
  padding: 1rem 1.25rem;
  font-size: 0.875rem;
}

.card-footer {
  margin-top: auto;
  padding: 1rem 1.25rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  border-top: 1px solid var(--c-border-primary);
}
.card-footer a {
  color: var(--c-text-action);
  text-decoration: none;
  font-weight: 500;
  font-size: 0.875rem;
}



.search-drop-button {
  display: inline-flex;
  align-items: center;
  border-radius: 0.5rem;
  border: 1.5rem solid #E2E2E4;
  --tw-bg-opacity: 1;
  background-color: #F9F9F9;
  padding-top: 0.325rem;
  padding-bottom: 0.325rem;
  text-align: center;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 500;
  color: #303032;
}

.search-drop-button span {
  margin-left: 0.75rem;
}

.search-drop-button svg {
  margin-right: 0.75rem;
}

html::-webkit-scrollbar {
  width: 12px;
}
html::-webkit-scrollbar-thumb {
  background-color: var(--c-text-primary);
  border: 4px solid var(--c-background-primary);
  border-radius: 99em;
}

@import url('https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css');
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR&display=swap');
@import url('https://abubakersaeed.github.io/dashboard-ui-n20/public/style.css');

</style>