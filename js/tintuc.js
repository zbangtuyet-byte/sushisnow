// 1. MẢNG DỮ LIỆU TIN TỨC
const newsData = [
    {
        image: "image/sp 1.jpg",
        title: "Tuyển Chọn Sashimi Sò Lông Tươi Sống",
        description: "Khám phá hương vị giòn ngọt, tươi mát đậm đà từ đại dương với món Sashimi Sò Lông nhập khẩu cao cấp tại Sushi Snow...",
        date: "24/10/2026"
    },
    {
        image: "image/sp 2.jpg",
        title: "Nigiri Sò Ngọt – Tinh Hoa Ẩm Thực Nhật",
        description: "Món Nigiri kết hợp giữa vị ngọt tự nhiên của thịt sò tươi và lớp cơm dẻo thơm chuẩn vị Nhật Bản mang đến trải nghiệm tuyệt vời...",
        date: "22/10/2026"
    },
    {
        image: "image/sp 3.png",
        title: "Bí Quyết Món Cá Nướng Muối Chuẩn Nhật",
        description: "Cá tươi nguyên con được nướng muối theo phương pháp truyền thống, giữ trọn vẹn vị ngọt đậm đà tự nhiên của từng thớ thịt...",
        date: "20/10/2026"
    },
    {
        image: "image/sp 4.png",
        title: "Thưởng Thức Salad Bò Nướng Thanh Mát",
        description: "Sự kết hợp hoàn hảo giữa thịt bò nướng mềm mọng, rau củ tươi xanh và sốt trộn đặc trưng giúp cân bằng dinh dưỡng cho bữa ăn...",
        date: "18/10/2026"
    },
    {
        image: "image/sp1.png",
        title: "Ra Mắt Set Cơm Trưa Bò Teppanyaki",
        description: "Thưởng thức combo cơm trưa áp chảo nóng hổi kèm salad, canh miso và tráng miệng thanh mát với mức giá cực kỳ ưu đãi...",
        date: "15/10/2026"
    },
    {
        image: "image/sp2.png",
        title: "Đầu Cá Hồi Nướng Muối Sốt Nhật Bản",
        description: "Đầu cá nướng thơm phức với phần da giòn rụm, thịt béo ngậy ăn kèm chanh tươi và củ cải bào thanh mát khó cưỡng...",
        date: "12/10/2026"
    },
    {
        image: "image/sp3.png",
        title: "California Roll Trứng Cua Hấp Dẫn",
        description: "Cuộn Sushi Tobiko phủ đầy trứng cua giòn tan, bơ sáp ngậy và bơ thanh mát luôn là sự lựa chọn số 1 của thực khách...",
        date: "10/10/2026"
    }
];

// 2. HÀM ĐỔ DỮ LIỆU TIN TỨC VÀO HTML
function renderNews() {
    const container = document.getElementById("shownews");
    if (!container) return;

    let htmlContent = "";
    newsData.forEach(item => {
        htmlContent += `
            <div class="col3">
                <img src="${item.image}" alt="${item.title}">
                <h2>${item.title}</h2>
                <p>${item.description}</p>
                <h3>${item.date}</h3>
                <button class="fm" onclick="alert('Xem chi tiết: ${item.title}')">Chi tiết</button>
            </div>
        `;
    });

    container.innerHTML = htmlContent;
}

// 3. XỬ LÝ SỰ KIỆN KHI TRANG TẢI XONG
$(document).ready(function() {
    // Đổ dữ liệu tin tức
    renderNews();

    // Ẩn/hiện khung đăng nhập
    $("#btnTat").click(function() {
        $("#login").hide();
    });
});

// 4. LOGIC CHẠY BANNER SLIDER
let arr = [
    "image/banner 1.png",
    "image/banner 2.png",
    "image/banner 3.png"
];
let i = 0;

function showBanner() {
    let bannerElement = document.getElementById("banner");
    if (bannerElement) {
        bannerElement.src = arr[i];
    }
}

function left() {
    i--;
    if (i < 0) {
        i = arr.length - 1; // Đã sửa lỗi cú pháp ở đây
    }
    showBanner();
}

function right() {
    i++;
    if (i >= arr.length) {
        i = 0;
    }
    showBanner();
}

// Tự động chuyển banner sau mỗi 3 giây
setInterval(right, 3000);