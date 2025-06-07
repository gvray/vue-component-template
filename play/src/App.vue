<template>
  <div class="container">
    <header>
      <h1>Vue Components</h1>
    </header>
    <main>
      <section class="demo-section">
        <h2>Button 按钮</h2>
        <div class="demo-block">
          <h3>基础用法</h3>
          <div class="demo-row">
            <vc-button>默认按钮</vc-button>
            <vc-button type="primary">主要按钮</vc-button>
            <vc-button type="success">成功按钮</vc-button>
            <vc-button type="warning">警告按钮</vc-button>
            <vc-button type="danger">危险按钮</vc-button>
          </div>
        </div>

        <div class="demo-block">
          <h3>不同尺寸</h3>
          <div class="demo-row">
            <vc-button size="small">小型按钮</vc-button>
            <vc-button>默认按钮</vc-button>
            <vc-button size="large">大型按钮</vc-button>
          </div>
        </div>

        <div class="demo-block">
          <h3>禁用状态</h3>
          <div class="demo-row">
            <vc-button disabled>禁用按钮</vc-button>
            <vc-button type="primary" disabled>禁用按钮</vc-button>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

header {
  margin-bottom: 40px;
  text-align: center;
}

h1 {
  font-size: 2.5em;
  color: #2c3e50;
}

.demo-section {
  margin-bottom: 40px;
}

h2 {
  font-size: 1.8em;
  color: #2c3e50;
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 2px solid #eee;
}

.demo-block {
  margin-bottom: 30px;
  padding: 20px;
  border-radius: 4px;
  border: 1px solid #eee;
}

h3 {
  font-size: 1.2em;
  color: #606266;
  margin-bottom: 15px;
}

.demo-row {
  display: flex;
  gap: 12px;
  align-items: center;
  flex-wrap: wrap;
}
</style>
