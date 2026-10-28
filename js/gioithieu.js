// 1. DỮ LIỆU NỘI DUNG GIỚI THIỆU
const aboutData = {
    sections: [
        {
            title: "Hành Trình Mang Hương Vị Nhật Bản Đến Việt Nam",
            paragraphs: [
                "Được thành lập với niềm đam mê sâu sắc dành cho nền ẩm thực xứ sở hoa anh đào, <strong>Sushi Snow</strong> ra đời nhằm mang lại trải nghiệm tinh tế, chuẩn vị truyền thống Nhật Bản đến gần hơn với thực khách Việt. Chúng tôi tin rằng, mỗi miếng sushi hay sashimi không chỉ đơn thuần là một món ăn nghệ thuật mà còn là sự kết tinh của văn hóa tôn trọng thiên nhiên và nguyên liệu.",
                "Tên gọi 'Snow' tượng trưng cho sự tinh khiết, trắng trong và tươi mới tuyệt đối – cũng chính là tiêu chuẩn cốt lõi mà nhà hàng cam kết mang vào từng món ăn phục vụ mỗi ngày."
            ]
        },
        {
            title: "Tiêu Chuẩn Nguyên Liệu & Chế Biến",
            paragraphs: [
                "100% hải sản tại Sushi Snow được tuyển chọn khắt khe và nhập khẩu trực tiếp từ các vùng biển uy tín, đảm bảo độ tươi sống nguyên bản. Kết hợp cùng gạo Nhật dẻo thơm, giấm sushi pha chế theo công thức độc quyền và bàn tay tài hoa của các đầu bếp nhiều năm kinh nghiệm, mỗi món ăn đều đạt độ hoàn hảo từ hương vị đến màu sắc."
            ]
        },
        {
            title: "Cam Kết Của Sushi Snow",
            listItems: [
                "<strong>Độ tươi ngon tuyệt đối:</strong> Nguyên liệu mới mỗi ngày, nói không với chất bảo quản.",
                "<strong>Không gian đậm chất Nhật:</strong> Mang lại cảm giác ấm cúng, thư thái cho gia đình và bạn bè.",
                "<strong>Dịch vụ tận tâm:</strong> Phục vụ chu đáo, chuyên nghiệp theo phong cách Omotenashi nổi tiếng."
            ]
        }
    ]
};

// 2. HÀM ĐỔ DỮ LIỆU GIỚI THIỆU VÀO HTML
function renderAboutUs() {
    const container = document.getElementById("about-content");
    if (!container) return;

    let htmlContent = "";

    aboutData.sections.forEach((section, index) => {
        let isLast = index === aboutData.sections.length - 1;
        htmlContent += `<div style="margin-bottom: ${isLast ? '0' : '30px'};">`;
        htmlContent += `<h2 style="color: #b30000; margin-bottom: 15px; font-size: 24px;">${section.title}</h2>`;

        if (section.paragraphs) {
            section.paragraphs.forEach(p => {
                htmlContent += `<p style="margin-bottom: 15px; font-size: 16px;">${p}</p>`;
            });
        }

        if (section.listItems) {
            htmlContent += `<ul style="list-style-type: disc; padding-left: 20px; font-size: 16px;">`;
            section.listItems.forEach(item => {
                htmlContent += `<li style="margin-bottom: 8px;">${item}</li>`;
            });
            htmlContent += `</ul>`;
        }

        htmlContent += `</div>`;
    });

    container.innerHTML = htmlContent;
}

// 3. XỬ LÝ SỰ KIỆN KHI TRANG TẢI XONG
$(document).ready(function() {
    // Đổ nội dung giới thiệu
    renderAboutUs();

    // Nút tắt form đăng nhập
    $("#btnTat").click(function() {
        $("#login").hide();
    });
});

// 4. LOGIC CHẠY BANNER SLIDER
let arr = [
    "image/banner 1.png",
    "image/banner 1.png",
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
        i = arr.length - 1;
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