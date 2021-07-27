<template>
  <div class="top-header">
    <div class="logo-wrapper">
      <logo stroke="white" stroke-width="50"></logo>
    </div>
    <div class="logo-text">
      <div class="cn-text">大数据可视化数据大盘</div>
      <div class="en-text">Delivery Overview of Business Data</div>
    </div>
    <div class="right-text">
      <div class="date">
        2021-07-25
      </div>
      <div class="time">
        23:58:13
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TopHeader'
}
</script>

<style lang="scss" scoped>
  .top-header {
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    background: rgb(36, 31, 32);
    padding: 0 64px;
    box-sizing: border-box;

    .logo {
      width: 120px;
      height: 120px;
    }

    .logo-wrapper {
      width: 140px;
      height: 140px;
    }

    .logo-text {
      flex: 1;
      margin-left: 40px;

      .cn-text {
        color: rgb(255, 255, 255);
        font-weight: bold;
        font-size: 60px;
        letter-spacing: 2px;
      }

      .en-text {
        color: rgb(255, 255, 255);
        font-size: 35px;
        letter-spacing: 1px;
      }
    }
  }
</style>
