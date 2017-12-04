export default `
<div class="editColor">
  <div>
    <div class="formBox">
      <div class="boxTitle">色相</div>
      <div class="boxMain">
        <input type="range" v-model="color[colorTarget].hue" min="0" max="359">
      </div>
    </div>
  </div>
  <div>
    <div class="formBox">
      <div class="boxTitle">彩度</div>
      <div class="boxMain">
        <input type="range" v-model="color[colorTarget].saturate" min="0" max="200">
      </div>
    </div>
  </div>
  <div>
    <div class="formBox">
      <div class="boxTitle">明るさ</div>
      <div class="boxMain">
        <input type="range" v-model="color[colorTarget].brightness" min="50" max="150">
      </div>
    </div>
  </div>
</div>
`;
