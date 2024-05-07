# OpenCv+CUDA实现Gpu加速

在C++使用Opencv对onnx模型进行目标检测的时候，发现识别速度高达3秒之上，即使开启了如下两行代码依旧是无济于事

```c
net.setPreferableBackend(cv::dnn::DNN_BACKEND_CUDA);
net.setPreferableTarget(cv::dnn::DNN_TARGET_CUDA);
```

经过了解，原来是默认的opencv是不支持CUDA的，我们需要自己手动对opencv进行重编译和打包。

