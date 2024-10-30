import React, { Component } from 'react';

class Imag extends Component {
    state = {
        base64String:'',
        image: null,
        croppedImage: null,
        bbox: { x1: 300, y1: 300, x2: 400, y2: 650 }, // 示例 bbox 左上角 (x1, y1) 和右下角 (x2, y2)
    };

    handleBase64Image = (base64String) => {
        // 确保 base64 字符串包含正确的前缀
        const imgSrc = base64String.startsWith('data:image/png;base64,') 
            ? base64String 
            : `data:image/png;base64,${base64String}`;

        this.setState({ image: imgSrc }, this.createCroppedImage);
    };



    createCroppedImage = () => {
        const { image, bbox } = this.state;
        if (!image) return;

        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        const scale = 2; // 显示略大一点的区域

        const width = bbox.x2 - bbox.x1; // 计算宽度
        const height = bbox.y2 - bbox.y1; // 计算高度

        canvas.width = width * scale;
        canvas.height = height * scale;

        const img = new Image();
        img.src = image;
        img.onload = () => {
            ctx.drawImage(img, bbox.x1-0.25*scale*width, bbox.y1-0.25*scale*height, width*2, height*2, 0, 0, canvas.width, canvas.height);
            const croppedImageUrl = canvas.toDataURL();
            this.setState({ croppedImage: croppedImageUrl }); // 更新裁剪后的图像
        };
    };

    render() {
        const { image, bbox, croppedImage } = this.state;
        const scale = 2; // 显示略大一点的区域

        // 计算红框在裁剪后图像上的位置
        const croppedWidth = (bbox.x2 - bbox.x1) * scale;
        const croppedHeight = (bbox.y2 - bbox.y1) * scale;

        return (
            <div>
                <input type="file" accept="image/*" onChange={this.handleImageUpload} />
                {image ? (
                    <div style={{ position: 'relative' }}>
                        <img src={image} alt="原图" style={{ maxWidth: '100%' }} />
                        <div
                            style={{
                                position: 'absolute',
                                left: bbox.x1,
                                top: bbox.y1,
                                width: bbox.x2 - bbox.x1,
                                height: bbox.y2 - bbox.y1,
                                border: '2px solid red',
                                boxSizing: 'border-box',
                            }}
                        />
                        {croppedImage && (
                            <div style={{ position: 'relative', marginTop: '20px' }}>
                                <img src={croppedImage} alt="裁剪区域" />
                                {/*<div*/}
                                {/*    style={{*/}
                                {/*        position: 'absolute',*/}
                                {/*        left: 0, // 裁剪后图像左上角*/}
                                {/*        top: 0,  // 裁剪后图像左上角*/}
                                {/*        width: croppedWidth,*/}
                                {/*        height: croppedHeight,*/}
                                {/*        border: '2px solid rgba(255, 0, 0, 0.5)', // 稍大的红框*/}
                                {/*        boxSizing: 'border-box',*/}
                                {/*    }}*/}
                                {/*/>*/}
                                <div
                                    style={{
                                        position: 'absolute',
                                        left: (bbox.x2-bbox.x1)* 0.25*scale, // 确保bbox框位置正确
                                        top: (bbox.y2-bbox.y1)*0.25* scale, // 确保bbox框位置正确
                                        width: bbox.x2 - bbox.x1,
                                        height: bbox.y2 - bbox.y1,
                                        border: '2px solid red', // 原始bbox红框
                                        boxSizing: 'border-box',
                                    }}
                                />
                            </div>
                        )}
                    </div>
                ) : null}
            </div>
        );
    }
}


export default Imag;