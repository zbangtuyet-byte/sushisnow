// Hiển thị sản phẩm ra trang (sửa lại slice lấy 8 sản phẩm nếu muốn, hoặc giữ nguyên số lượng bạn muốn)
let hienThiDs = ds.slice(0, 8); 

for (let i = 0; i < hienThiDs.length; i++) {
    document.getElementById('productAll').innerHTML +=
        `<div class="col3 m3">
            <img src="image/${ds[i].hinh}" alt="">
            <h3 style="color:blue">${ds[i].ten}</h3>
            <p style="color:red">${ds[i].loai}</p>
            <p>${ds[i].mota}</p>
            <h3>${ds[i].gia}</h3>
            <button class="fm1" onclick="addCart(${i},${ds[i].id})">Mua ngay</button>
        </div>`
}

// Khởi tạo giỏ hàng từ localStorage
let giohang = JSON.parse(localStorage.getItem('giohang_Storage')) || [];

// Gọi viewCart ngay khi load trang để hiển thị các sản phẩm đã có sẵn trong giỏ hàng
viewCart();

function addCart(index, ID) {
    if (giohang.length == 0) {
        alert("Bạn đang thêm vào giỏ hàng");
        let sp = { ...ds[index] }; // Sao chép đối tượng để tránh tham chiếu trực tiếp
        sp.sl = 1;
        giohang.push(sp);
    } else {
        let found = false;
        for (var i = 0; i < giohang.length; i++) {
            // Trường hợp trùng ID => tăng số lượng lên 1
            if (giohang[i].id == ID) {
                giohang[i].sl++;
                found = true;
                break;
            }
        }
        
        // Trường hợp không trùng => thêm dòng sản phẩm mới
        if (!found) {
            let sp = { ...ds[index] };
            sp.sl = 1;
            giohang.push(sp);
        }
    }

    // Gán giỏ hàng vào localStorage
    localStorage.setItem("giohang_Storage", JSON.stringify(giohang));
    
    // Cập nhật lại giao diện giỏ hàng
    viewCart();
}

function viewCart() {
    let thanhtien = 0;
    let kq = ""; // KHỞI TẠO CHUỖI RỖNG ĐỂ TRÁNH LỖI HIỂN THỊ CHỮ "undefined"
    let tongtien = 0;

    for (let i = 0; i < giohang.length; i++) {
        thanhtien = giohang[i].gia * giohang[i].sl;
        tongtien += thanhtien;
        kq += `
        <tr>
            <td>${i + 1}</td>
            <td>${giohang[i].ten}</td>
            <td><img src="image/${giohang[i].hinh}" alt="" style="width:50px"></td>
            <td>${giohang[i].sl}</td>
            <td>${giohang[i].gia}</td>
            <td>${thanhtien}</td>
            <td><button type="button" onclick="xoaSanPham(${i})" style="background: #dc3545; color: white; border: none; padding: 4px 8px; border-radius: 4px; cursor: pointer;">Xoá</button></td>
        </tr>
        `;
    }
    
    document.getElementById("addCart").innerHTML = kq;
    document.getElementById("tongtien").innerText = tongtien + "đ";
}

// Hàm xử lý xoá sản phẩm khỏi giỏ hàng theo vị trí (index)
function xoaSanPham(index) {
    // Xoá phần tử khỏi mảng
    giohang.splice(index, 1);
    
    // Cập nhật lại localStorage
    localStorage.setItem("giohang_Storage", JSON.stringify(giohang));
    
    // Render lại bảng giỏ hàng
    viewCart();
}

// Hàm thanh toán cơ bản
function thanhToan() {
    if (giohang.length === 0) {
        alert("Giỏ hàng của bạn đang trống!");
        return;
    }
    alert("Thanh toán thành công! Cảm ơn bạn đã đặt hàng.");
    giohang = [];
    localStorage.removeItem("giohang_Storage");
    viewCart();
}