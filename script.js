const travelButton = document.querySelectorAll(".category button")[0];
const webtoonButton = document.querySelectorAll(".category button")[1];
const cardContainer = document.querySelector(".card-container");

travelButton.addEventListener("click", function() {
  cardContainer.innerHTML = `
    <div class="card">
      <h3>도쿄 여행</h3>
      <p>⭐⭐⭐⭐⭐</p>
      <p>맛있는 음식과 분위기 최고</p>
    </div>
  `;
});

webtoonButton.addEventListener("click", function() {
  cardContainer.innerHTML = `
    <div class="card">
      <h3>화산귀환</h3>
      <p>⭐⭐⭐⭐⭐</p>
      <p>스토리 전개가 빠르고 캐릭터가 매력적</p>
    </div>
  `;
});
