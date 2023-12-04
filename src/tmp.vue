<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'
import { FwbDropdown } from 'flowbite-vue'

onMounted(() => {
    initFlowbite();
})
</script>

<template>
  <div class="emr">
    <header>
      <nav class="search-wrapper">
        <div class="search-menu">
          <div class="search-bar">
            <!--    Type2 검색바      -->
            <button type="button" data-collapse-toggle="navbar-search" aria-controls="navbar-search" aria-expanded="false" class="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 me-1">
              <svg class="button-item" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
              </svg>
              <span class="sr-only">Search</span>
            </button>
            <!--    Type1 검색바      -->
            <div class="search-bar-type1">
              <div class="search-button">
                <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
                <span class="sr-only">Search icon</span>
              </div>
              <input type="text" id="search-navbar" class="search-box" placeholder="환자검색 (이름/차트번호/생년월일/휴대폰번호)">
            </div>
            <!--    Type2 메뉴      -->
            <button data-collapse-toggle="navbar-search" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-search" aria-expanded="false">
              <span class="sr-only">Open main menu</span>
              <svg class="button-item" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </header>
    <!--  <main>-->
    <!--    <TheWelcome />-->
    <!--  </main>-->
    <div class="wrapper">
      <div class="main-container">

      </div>
    </div>
  </div>
</template>

<style scoped>
.emr {
  display: flex;
  flex-direction: column;
  height: 100vh;
  margin: 0 auto;
  overflow: hidden;
  background-color: #E2E2E2;
}

header {
  line-height: 1.5;
  background-color: #335ACA;
}

.search-wrapper {
  margin: 0 auto;
}

.search-menu {
  margin-left: auto;
  margin-right: auto;
  display: flex;
  max-width: 1280px;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
}

.search-bar {
  display: flex;
  align-items: center;
  order: 2;
  width: 498px;
}

.search-bar-type1 {
  display: none;
  width: 498px;
}

.button-item {
  width: 1.25rem;
  height: 1.25rem;
  display: block;
}

.search-button {
  pointer-events: none;
  position: absolute;
  top: 0;
  bottom: 0;
  inset-inline-start: 0;
  display: flex;
  align-items: center;
  padding-inline-start: 0.75rem;
}

.search-box {
  display: block;
  width: 100%;
  border-radius: 0.5rem;
  border-width: 1px;
  --tw-border-opacity: 1;
  //border-color: rgb(209 213 219 / var(--tw-border-opacity));
  --tw-bg-opacity: 1;
  //background-color: #6586DB;
  padding: 0.5rem;
  padding-inline-start: 2.5rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  --tw-text-opacity: 1;
  color: rgb(17 24 39 / var(--tw-text-opacity));
}

.search-box:focus {
  border-color: #3b82f6;
}

.wrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  scroll-behavior: smooth;
  padding: 30px 40px;
  overflow: auto;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    //padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}

@media (min-width: 768px) {
  .search-bar-type1 {
    position: relative;
    display: block;
  }
}

</style>
