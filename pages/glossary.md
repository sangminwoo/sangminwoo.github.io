---
layout: page
permalink: "glossary"
title: Deep Learning & Machine Learning Glossary
subtitle: A to Z
show-avatar: true
comments: true
---

## A
1. Ablation Study
   Ablation study는 모델이나 알고리즘을 구성하는 다양한 구성요소(component) 중 어떠한 “feature”를 제거할 때, 성능(performance)에 어떠한 영향을 미치는지 파악하는 방법을 말한다. 좀 더 막연한(coarse) 정의로는, 제안한 요소가 모델에 어떠한 영향을 미치는지 확인하고 싶을 때, 이 요소를 포함한 모델과 포함하지 않은 모델을 비교하는 것을 말한다. 이는 딥러닝 연구에서 매우 중요한 의미를 지니는데, 시스템의 인과관계(causality)를 간단히 알아볼 수 있기 때문이다.

2. Accuracy
   정확도(Accuracy)는 분류 모델의 성능을 나타내는 지표 중 하나로, 데이터셋을 구분하는 두 개 이상의 클래스가 있을 때 이를 정확히 분류해내는 정도를 의미한다. 이진 분류(Binary Classification)에서 정확도의 정의는 조금 더 명료하다. 혼동행렬(Confusion Matrix)에서 차용한 개념으로, 전체 데이터셋에 대해 참양성(True Positive, TP)과 참음성(True False, TF)으로 예측한 개수를 말한다.

3. Activation Function
   Input값, x와 Weight, W를 곱하고 bias, b를 더한 뒤 씌워주는 활성화(Activation) 함수, . 즉, 활성 함수의 출력 값은 이다. Activation Function으로 전통적으로 Sigmoid나 Tanh을 많이 사용했지만 최근에는 ReLU를 많이 사용한다. 활성 함수를 씌움으로써 Neural Networks는 비선형(Non-Linear)적인 함수(Function)도 Approximate할 수 있다.

4. AdaDelta
   AdaDelta(Adaptive Delta)도 AdaGrad와 마찬가지로 학습률(learning rate)을 시간의 변화에 따라 조정한다. 하지만 AdaGrad는 학습률(learning rate)이 너무 빠르게 감소하여 non-convex한 환경에서 극솟값(local minimum)에 갇혀버리는 단점이 존재한다. AdaDelta는 이를 보완하기 위해 제안된 방법으로써, AdaGrad와 달리 gradient의 제곱 합 대신 지수평균을 사용한다. 이러한 점에서는 RMSProp와 유사하지만, 파라미터를 업데이트하는 방식에서 step size 변화량(Delta)의 제곱근을 사용한다는 점에서 RMSProp과 차이점을 보인다.

5. AdaGrad
   AdaGrad(Adaptive Gradient Descent)는 적응형 학습률 변화 알고리즘(adaptive learning rate algorithm)으로, 기울기(gradient)의 제곱을 시간의 변화에 따라 계속 유지하도록 하는 것이 특징이다. 쉽게 말하자면, 학습률을 줄여나가고 속도를 계산하여 학습의 갱신강도를 적응적으로 조정해나가는 방법이다. 자주 업데이트 된 파라미터들은, 최적값(optimum value)에 가까이 있다고 여겨 step size(혹은 learning rate)를 작게 조정하고, 반대의 경우, 최적값에서 멀리 떨어져 있다고 여기고 step size를 크게 두어 빠르게 loss 값을 줄이는 방향으로 조정한다. 즉, 파라미터들을 업데이트할 때, 더 움직인 파라미터는 덜 움직이게, 덜 움직인 파라미터는 더 움직이게끔 step size를 자동으로 조정해주는 방식이다. 이러한 특징 때문에 “적응형(adaptive)”이라는 명칭이 붙었다. 하지만 AdaGrad는 학습이 오래 진행될 경우, step size가 너무 작아져서 결국 거의 움직이지 않게 된다는 문제점이 존재한다.

6. Adam
   Adam(Adaptive Moment Estimation)은 RMSProp에 모멘텀(Momentum)을 섞어놓은 방식이다. 모멘텀 방식과 유사하게 지금까지 계산해온 기울기의 지수평균을 저장하며, RMSProp과 유사하게 기울기의 제곱값의 지수평균을 저장한다. 쉽게 생각하면 RMSProp의 조금 더 안정화된 버전이다. Adam 업데이트 절차 중에는 편향 보정(bias correction) 메커니즘이 반영되어 있는데, 벡터 m,v가 나중에 완벽하게 “워밍업” 되기 전에 (iteration의 처음 몇 스텝에서) 초기화되어 0에 편향되어 있다는 점을 보상하기 위해서이다.

7. Agent
   인공지능에서 어떤 행위(action)를 수행하는 주체. 보통 강화학습(Reinforcement Learning) 환경에서 행위를 수행하는 주체를 의미할 때가 많다. 환경에 따라서 에이전트(Agent)는 다양한 형태로 구현될 수 있다. 예를 들어, 알파고의 경우 Agent는 바둑을 수행하는 인공지능이고, Atari Breakout(벽돌깨기) 문제의 경우 Agent는 좌우로 움직이며 벽돌깨기를 플레이하는 인공지능이다.

8. Affine Layer
   신경망의 전연결층(Fully connected layer)의 다른 말로, 이전 레이어의 모든 뉴런들이 현재 레이어의 모든 뉴런들에 연결되어있는 레이어를 의미한다. Affine layer의 전형적으로 의 형태를 가지고, 여기서 는 레이어의 입력, 가 파라미터, 가 편향 벡터(bias vector), 가 비선형 활성화 함수(non-linear activation function)이다. 제한적 볼츠만 머신(Restricted Boltzmann Machine, RBM)은 affine layer의 한 예이다.

9. Artifact
   인공물

10. Attention Mechanism
   주의집중 메커니즘(Attention Mechanism)은 인간의 시각구조상 일정 부분만 고해상도로 보고 이외의 부분은 저해상도로 보는 주의집중 능력에서 착안한 개념이다. 주의집중 메커니즘은 자연어 처리(Natural Language Processing, NLP)와 이미지 인식(Image Recognition) 분야에서, 특정 영역을 집중적으로 학습하도록 하여 모델의 예측 정확도를 높이는 방법으로써 사용된다.

11. AlexNet
   알렉스넷(Alexnet)은 2012년도 이미지넷 대회(ImageNet Large Scale Visual Recognition Challenge, ILSVRC 2012)의 이미지 인식(Image Recognition) 분야에서 가장 큰 성능차이로 우승하며 CNN의 관심을 부활시켰다. 기본적으로 Convolutional Neural Networks (CNN) 구조로, 5개의 convolutional 레이어, maxpooling 레이어, 3개의 전연결층(Fully Connected Layer)과 1000개의 출력을 가지는 softmax로 구성되어 있다.

12. Autoencoder(AE)
   Input과 Output 노드의 개수가 같은 형태의 Neural Network. Input과 Output 노드의 수가 같으므로 항등 함수를 배우도록 training 된다. 자기부호화기(Autoencoder)은 비지도학습(Unsupervised Learning), 특히 차원 축소를 위해 사용하는 사전학습(pre-training) 알고리즘이다. 순전파(Forward Propagation)과 역전파(Back Propagation)을 반복하면서 Output이 Input과 비슷해지도록(자기 자신을 재현하도록) 학습하고 모형을 생성한다. 이때 입력층(Input Layer)과 중간층(Hidden Layer) 사이에서는 정보 압축(부호화, encoding)이 일어나며, 중간층(Hidden Layer)과 출력층(Output Layer) 사이에서는 정보 복원(복호화, decoding)이 일어난다. 이때 hidden layer의 노드 개수가 output layer의 노드 개수보다 적으므로 hidden layer는 input layer에 관한 정보를 압축해서 저장해야만 한다. 따라서 hidden layer는 input layer에 대한 특징들(Features)을 저장하도록 학습되며 가중치 역시 최적화된다. 따라서 이 hidden layer의 아웃풋을 추출해서 이를 인풋 데이터의 압축된 특징(Feature)으로 이용해서 다른 Task에 적용할 수 있다. (e.g. Classifier의 Input으로 Raw Input 대신 Autoencoder의 Hidden Layer의 Output을 Input으로 사용한다.)

Autoencoder의 Architecture와 hidden layer의 output으로부터 추출한 특징(feature)

13. Average Pooling
    평균 풀링(Average Pooling)은 이미지 인식을 위해 합성곱 신경망(Convolutional Neural Network,CNN)에서 사용되는 풀링(pooling) 기법 중 하나이다. 특징(feature)이 표현된 레이어 위를 윈도우가 순회(window sliding)하며 해당 윈도우의 모든 값의 평균을 취한다. 이는 입력 표현을 저차원의 표현으로 압축하는 역할을 한다.

## B
1. Backpropagation
   역전파(Back propagation)는 신경망(Neural Network) 또는 피드포워드 연산 그래프(feedforward computational graph)에서 경사하강법(Gradient Descent)을 수행하기 위한 기본 알고리즘이다. 우선, 정방향 단계에서 각 노드의 출력값이 계산되고 이를 캐시(cache)한다. 이후 역방향 단계에서는 신경망의 출력으로부터 시작하여 각 매개변수에 대해 오차의 편미분(Partial Differential)이 계산되고, 연쇄법칙(Chain Rule)을 통해 역방향으로 전달된다. 이 과정을 반복적으로 거치면서 오차를 최소화 하는 방향으로 파라미터들이 업데이트 된다.

2. Baseline
   모델간의 성능을 비교할 때, 참조(Reference)로써 사용되는 모델 또는 휴리스틱(Heuristic)을 의미한다. 기준(Baseline)은 모델 개발자가 특정 문제에 예상되는 최종 성능을 산정하는데 도움을 준다.

3. Batch
   Gradient Descent 알고리즘에서 한 번 업데이트(Update)할 때 사용하는 Training Data의 개수. 즉, data를 나눠서 만든 하나의 묶음. 신경망의 관점에서는 한 번의 순전파/역전파(forward/backward pass)동안 사용되는 학습데이터의 수를 말한다. batch size가 많아질수록 더 많은 메모리 공간을 요구하기 때문에, mini-batch로 나누어서 학습시키는게 일반적이다.

4. Batch Normalization(BN)
   Deep Learning에서의 고질적 문제인 Vanishing/Exploding Gradient Problem은 layer의 수가 깊어질수록 internal covariate shift가 누적되어 발생한다. 배치 정규화(Batch Normalization)는 각 layer의 입력을 정규화하여 internal covariate shift를 줄임으로써 해결한다. 이를 통해 학습 속도를 개선하고 최적화 효과를 높일 수 있다. mini-batch SGD을 사용할 때 parameter update가 mini-batch 단위로 나타나기 때문에 각 mini-batch에 대해서 평균(mean)과 분산(variance)을 구하고, 이 값을 이용하여 각 Layer 노드의 값을 평균 0, 분산 1이 되도록 정규화(Normalization)한다. Whitening과 유사하지만 mean과 variance를 조정하는 과정이 별도의 process로 있는 것이 아니라, 신경망의 중간 layer에 위치하게 되어 back-propagation을 통해 학습이 가능하다는 점에서 whitening과 구별된다.

5. Benchmark
   문맥을 고려하지 않을 때, 벤치마크(Benchmark)는 솔루션들을 비교할 때 표준이 되고, 어떤 솔루션이 더 낫고 나쁜지 판가름하는 지표라고 이해할 수 수 있다. 하지만 기계학습의 맥락에서, 벤치마크는 이미 성능이 뛰어난 표준 솔루션을 의미한다. 솔루션의 성능을 테스트할 때 주로 훈련/테스트 데이터를 주고 솔루션이 보이는 정확도를 벤치마크와 비교한다. 이를 통해 기존의 벤치마크보다 더 나은 솔루션을 찾을 수 있다. 

6. Bias
   Neural Networks에서 activation function에 들어가기 전에 Input, x와 Weight, W의 곱에 더해지는 값. 즉, 에서 b. 편향(Bias)을 이용함으로써 함수가 더 강력한 표현력을 가지게 된다.

Wx만을 이용한 이진분류, Wx+b를 이용한 이진분류의 비교

7. Boltzmann Machine
   볼츠만 머신(Boltzmann Machine)은 0 또는 1의 값을 취하는 다수의 뉴런으로 구성된 네트워크로써, 모든 뉴런은 서로 연결되어 있다. 볼츠만 머신은 복잡한 트레이닝 데이터(training data)로 부터 규칙적인 패턴 혹은 유의미한 특징을 발견할 수 있는 학습 알고리즘을 가지고 있다. 하지만 모델 구현이 매우 어렵기 때문에 가시 레이어(visible layer)와 히든 레이어(hidden layer)를 분리시킨 제한된 볼츠만 머신(RBM)의 형태로 주로 사용된다.

8. Bucketing(Binning)
   일정 구간의 연속적인 값(Continuous Value)을 어떤 이산값(Discrete Value)로 Mapping해주는 기법. 일정 구간을 하나의 양동이(Bucket) 또는 통(bin)으로 간주할 수 있기 때문에 Bucketing 또는 Binning으로 불린다. 예를 들어서 0.0~50.0이라는 실수값이 있다면 0~10.0까지의 값은 1, 10.0~20.0까지의 값은 2, 20.0~30.0까지의 값은 3, 30.0~40.0까지의 값은 4, 40.0~50.0까지의 값은 5. 이렇게 5가지의 Discrete value로 0.0~50.0이라는 실수값을 Mapping할 수 있다.

## C
1. Captioning
   이미지에 대한 설명 + Labeling   

2. CIFAR-10 (CIFAR-100)
   CIFAR-10과 CIFAR-100은 라벨링된 8000만개의 작은 이미지 데이터셋이다. AlexNet의 Alex Krizhevsky 등이 수집하였다.
   (1) CIFAR-10
       CIFAR-10 데이터셋은 10개의 클래스 안에 6000장씩, 총 60000장의 32X32 칼라이미지를 포함한다. 50000개의 훈련이미지와 10000장의 테스트이미지로 구성되어있다. 훈련 배치(training batch)와 테스트 배치(test batch)의 비율은 5:1이다. 테스트 배치는 각 클래스 당 1000장의 무작위로 선택된 이미지를, 훈련 배치는 각 클래스 당 나머지 5000장을 임의의 순서(random order)로 포함한다. 그러므로 훈련 배치는 특정 클래스에서 더 많은 이미지를 포함할 수도 있다. 클래스는 완전히 상호배제적(mutually exclusive)이다. 즉, ‘automobile’과 ‘truck’ 클래스 사이에는 겹치는 부분이 없다. ‘automobile’은 세단이나 SUV와 같은 것들을 포함하고, ‘truck’은 오로지 트럭만을 포함한다. 양쪽 다 소형트럭(pickup truck)은 포함하지 않는다.
   (2) CIFAR-100
       100개의 클래스 각각이 600장의 이미지로 구성된다는 점만 제외하면 CIFAR-10과 동일하다. 각각의 클래스는 500장의 훈련이미지와 100장의 테스트 이미지로 구성된다. CIFAR-100의 100개의 클래스는 20개의 슈퍼클래스(superclass)로 다시 묶일 수 있다. 각각의 이미지는 “가는(fine)” label(이미지가 속한 클래스) 혹은 “굵은(coarse)” label(이미지가 속한 슈퍼클래스)이 함께 제공된다.

3. Classification
   이미지 분류란 어떤 이미지의 주제나 물체를 미리 정의한 클래스들로 분류하는 것을 목표로 하는 컴퓨터비전 문제이다. 가령, 아이한테 image flash card를 보여주고 어떤 물체가 그려져 있는지 물어보는 것이다. 이 이미지는 0~9까지의 숫자 중에 무엇인가?, 이 이미지는 강아지인가 고양인가? 등의 문제를 맞추는 것이 Classification(분류) 문제이다.

4. Clustering
   라벨(label)이 없는 데이터에 대한 군집화이며, 특히 비지도 학습(Unsupervised Learning)에서 사용된다. 모든 데이터가 그룹으로 묶이고 나면 사람이 선택적으로 각 클러스터에 라벨을 붙일 수(labeling) 있다. 클러스터링(Clustering)의 한 종류인 k-평균 알고리즘(K-means Algorithm)은 아래 그림과 같이 각 데이터의 중심(centroid)에 가까운 정도를 기준으로 클러스터링 한다.

5. Computational Graph
   연산그래프(Computational Graph)는 각 노드가 연산(operation) 혹은 변수(variable)인 유향그래프(directed graph)이다. 변수 노드는 그 값을 연산 노드에 먹일 수 있으며, 연산 노드에 대한 출력은 또 다른 연산 노드에 먹일 수 있다. 결과적으로 연산그래프의 모든 노드는 어떤 변수에 대한 함수로써 정의된다.

6. Concave
   Concave function은 위로 볼록한 형태로 국소 최댓값(Local Maximum)이 유일하고, 전역 최댓값(Global Maximum)과 일치하는 함수를 말한다. 간단한 예로, n자 형태인 이 있다. 위로 볼록(Concave)이나 아래로 볼록(Convex) 중 한 가지로만 정의할 수 없는 형태의 함수들의 경우, 위로 볼록(concave)또는 아래로 볼록(convex)으로 구분할 수 없다.

7. Confusion Matrix
   오류의 경향을 세밀하게 분석할 때, 혼동행렬(Confusion Matrix)을 사용한다. Confusion Matrix를 살펴보면 분류기가 어떤 부류를 다른 부류로 혼동하는지 경향을 일목요연하게 파악할 수 있다. 아래의 표는 이진 분류(Binary Classfication)의 Confusion Matrix을 보여주는데, 는 부류 에 속하는 샘플을 로 분류한 것의 개수이다. 표에서 확인할 수 있듯이 이진 분류의 결과는 네 가지로 나눌 수 있다. 을 으로 옳게 분류한 샘플은 TP(True Positive), 를 로 옳게 분류한 샘플은 TN(True Negative), 을 로 틀리게 분류한 샘플은 FN(Fasle Negative), 를 으로 틀리게 분류한 샘플은 FP(False Positive)이라 한다. 혼동행렬(Confusion Matrix)을 통해 정확도(Precision), 재현율(Recall) 등 모델 성능을 평가하는 다양한 지표를 측정할 수 있다.

분류 결과
참 분류

8. Convex function
   Convex function은 아래로 볼록한 형태로 국소 최솟값(Local Minimum)이 유일하고, 전역 최솟값(Global Minimum)과 일치하는 함수를 말한다. 간단한 예로, U자 형태인 이 있다.

9. Cost Function
   가설(Hypothesis)이 얼마나 정확한지 판단하는 기준이 된다. 즉, 실제 값과 예측 값(가설)의 차이를 나타낸다. 말 그대로 비용함수이기 때문에 최소화 할수록 좋다. 종종 손실함수(Loss function)와 동일한 것으로 보는 경우도 있으나, 비용함수는 손실함수에 비해 조금 더 광범위하거나 일반적인(coarse) 개념으로 이해된다. 가령, 전체 학습데이터에 대한 손실함수(loss function)의 총합에 모델의 복잡도 패널티(Complexity Penalty)의 개념을 포함하는 것이 비용함수이다.

10. Covariate Shift
   학습하는 도중에 이전 layer의 파라미터(parameter) 변화로 인해 현재 layer의 입력의 분포가 바뀌는 현상을 Internal Covariate Shift라고 한다. 학습 시 현재 layer의 입력은 이전의 모든 layer에서의 parameter 변화에 영향을 받고, layer가 깊어짐에 따라 parameter의 변화가 증폭되어 뒷단에 더 큰 영향을 끼치게 된다. 결과적으로 training data와 test data의 data distribution이 달라지게 된다. 이는 귀마개를 한 채 상대방의 입모양을 보고 무슨 말인지 알아내는 게임으로 비유할 수 있다. 이를 해결하는 방법으로, whitening과 Batch Normalization이 제시되었다.

11. Convolution
   앞단의 layer에 대해 각각의 filter를 convolution 함으로써 얻어진 feature map은 앞단의 layer와 filter의 유사도(얼마나 비슷한지)를 나타낸다. 각각의 filter는 convolution 연산을 통해 다음 단에서 feature map의 각 채널로 치환된다.

12. Convolutional Neural Networks(CNN)
   Convolution Layer, Subsampling(Pooling) Layer, Fully Connected Layer로 구성된 Neural Networks. Supervised Learning을 위해 사용된다. 기존의 Neural Networks는 인풋 데이터 사이즈가 커지면 계산량이 기하급수적으로 증가하는 문제점이 있었다. 따라서 이미지와 같이 인풋 데이터의 dimension이 큰 경우를 다루기 위해서 합성공 신경망(Convolution Neural Networks, CNN)이 제안되었다. CNN은 raw 인풋 데이터로부터 Convolution Layer를 통해 유의미한 특징들(features)만을 추출하고, 이어서 Subsampling (Pooling) Layer 를 통해 Convolution Layer로부터 추출된 결과값의 dimension을 축소시킨다. 이런 과정을 반복한 후 마지막 Fully Connected Layer에서 압축된 Feature를 통해 Classification과 같은 prediction을 수행한다. 현재 딥러닝이 적용가능한 대부분의 Task에서 활발히 사용되고 있는 가장 인기 있는 모델 구조이다.

일반적인 Convolutional Neural Network의 Architecture

13. Cross-Entropy Function
   Neural Networks의 Cost Function으로 널리 사용되는 Function 중 하나. 아래와 같이 정의된다.
   
   MSE(Mean Squared Error, 평균 제곱 오차) Cost Function을 사용했을 경우 발생하는 Neural Networks의 학습속도 저하(Slowdown) 문제가 없기 때문에 MSE Cost Function보다 더욱 널리 사용된다.

14. Cross Validation
   교차 검증(Cross Validation)은 전체 데이터의 크기가 5라고 할 때, 4를 훈련 데이터, 나머지 1을 테스트 데이터로 두고, 훈련 데이터와 테스트 데이터의 조합을 바꿔가며 학습한 5개의 모델로 정확도를 측정하는 방법이다. 5개 모형의 정확도에 대한 평균을 계산하여 이를 모델의 정확도로 삼는다. 그리고 모델의 안정성을 나타내는 지표로 표준편차 값을 함께 계산한다.

훈련
훈련
훈련
훈련
테스트
→
정확도1

훈련
훈련
훈련
테스트
훈련
→
정확도2

평균 정확도
(+표준편차)
훈련
훈련
테스트
훈련
훈련
→
정확도3
→
훈련
테스트
훈련
훈련
훈련
→
정확도4

테스트
훈련
훈련
훈련
훈련
→
정확도5

## D
1. Deep Neural Network(DNN)
   심층신경망(Deep Neural Network)은 딥러닝(Deep Learning)의 주요 메커니즘이다. 일반적인 신경망(Neural Network)에 비해 깊은 층(Deep Layer)을 가지기 때문에 심층신경망(Deep Neural Network)이라고 부른다. NN과 DNN 모두 퍼셉트론(Perceptron)을 여러 개 조합해서 구성한 것이므로 다층 퍼셉트론(Multi-Layer Perceptron, MLP)이라 볼 수 있다.

2. Dense Layer
   밀집레이어(Dense Layer)는 전연결층(Fully Connected Layer)과 같은 뜻으로 사용된다.

3. Discriminative model
   일반적으로 판별모델(Discriminative model)은 지도학습에 사용되며, 클래스 간의 의사결정 경계(decision boundary)를 모델링한다. 학습데이터에서 각각의 조건부 확률 분포(Conditional Probability Distribution), 를 학습하여 그 차이를 구분한다.

4. Dithering
   디더링(Dithering)은 제한된 색을 이용하여 음영이나 색을 나타내는 것이며, 여러 컬러의 색을 최대한 맞추는 과정이다. 그래픽 디자이너의 색채공간 속에서 하나의 세기가 아닌 다른 픽셀 세기로 구성되기 때문에 낟알이 많은 것처럼 다소 거칠게 보일 수 있다.

5. Dropout
   일반적으로 신경망에서 layer가 깊어질수록 학습 능력은 좋아지지만, 학습시간이 길어지고 과적합(overfitting)의 문제가 발생할 수 있다. layer의 개수가 많아졌을 때, 과적합을 억제하기 위한 해결책 중 하나로 망부분생략(Dropout)을 사용한다. 이는 아래의 그림과 같이 각 층의 노드 중 일정 비율을 생략(drop)하고 그 외의 노드만 사용해 학습을 진행하는 방법이다. 일정한 mini-batch 구간 동안 생략된 망에 대한 학습을 끝내면, 다시 무작위로 다른 뉴런들을 생략하여 반복적으로 학습을 수행한다. 다음은 dropout의 대표적인 2가지 효과이다.

   (1) 투표(Voting) 효과: dropout을 무작위로 반복하게 되면, voting에 의한 평균 효과를 얻을 수 있기 때문에 결과적으로 regularization과 비슷한 효과를 얻게 된다.
   (2) 강건(Robust)한 모델: 특정 뉴런이 bias나 weight가 큰 값을 가질 때, 그 영향으로 인해 다른 뉴런들의 학습속도가 느려지거나 제대로 진행되지 못하는 경우가 있다. 하지만 dropout을 사용하여 학습하게 되면, 다른 뉴런이 특정 뉴런의 bias나 weight의 영향을 받지 않기 때문에 결과적으로 뉴런들이 서로 동조화(co-adaptive) 되는 것을 방지할 수 있다. 즉, 특정 학습데이터나 자료에 영향을 받지 않는 강건(robust)한 망을 구성할 수 있다.

## E
1. Embeddings
   임베딩(embeddings)은 이산 값(discrete value)의 고차원 벡터에서 연속 값(continuous value)을 가지는 저차원 벡터로 매핑(mapping)시켜주는 것을 말한다. 가령, 한 문단에서 사용한 영단어를 1, 사용하지 않은 영단어를 0이라고 하자. 수백만 개의 영단어 중 한 문단에 사용되는 단어는 대개 50개 이하이기 때문에 몇 개를 제외한 대부분의 영단어는 0으로 표기될 것이다. 이를 수백만 개의 정수를 갖는 희소 벡터(sparse vector)에서 수백 개의 0~1 사이의 부동 소수점을 갖는 밀집 벡터(dense vector)로 표현할 수 있다.

2. Ensemble Learning
   앙상블 러닝(Ensemble Learning)은 여러 악기가 모여 합주를 하듯이, 여러 분류기(weak classifier)를 병합하여 더 좋은 분류 성능을 내는 기법이다. 따라서 연산량이 증가하는 문제가 있지만 ILSVRC와 같이 극도로 성능을 이끌어내야 하는 대회 같은 상황에서는 거의 필수적으로 사용된다. 여러 분류기의 결과를 종합하는 데는 보통 다수결 투표(Majority voting)를 사용한다. 예를 들어 “고양이”와 “강아지”를 분류하는 문제를 5개의 분류기를 통해 Ensemble Learning하는 상황에서, 분류기 1이 “고양이”, 분류기 2가 “고양이”, 분류기 3이 “고양이”, 분류기 4가 “강아지”, 분류기 5가 “강아지”라고 예측했다면, 다수결의 원칙에 의해서 “고양이”가 옳은 예측(Prediction)이라고 결정하는 것이다. 이 과정을 그림으로 나타내면 아래와 같다. (아래 그림처럼 서로 다른 종류의 Machine Learning 알고리즘끼리도 결합할 수 있다.)


3. Epoch
   알고리즘이 전체 학습데이터를 한 번 봤	을 때 1 세대(epoch)라고 표현한다. 신경망의 관점에서는 모든 학습데이터에 대해서 한번의 forward pass와 한번의 backward pass를 거쳤을 때 1 epoch가 된다. 예를 들어, 1000개의 학습데이터가 있고, batch size는 500이라 하자. 1epoch를 마치는데 2 iteration을 거쳐야 한다.

4. Exploding Gradient Problem
   Gradient 계산을 보면, 자코비안 행렬 안의 값들이 크다면 activation 함수와 네트워크 파라미터 값에 따라 gradient가 사라지는게 아니라 지수 함수로 증가하는 경우도 충분히 상상해볼 수 있다. 이 문제 역시 exploding gradient 문제 로 잘 알려져 있다. Vanishing gradient 문제가 더 많은 관심을 받은 이유는 두 가지인데, 하나는 exploding gradient 문제는 쉽게 알아차릴 수 있다는 점이다. Gradient 값들이 NaN (not a number)이 될 것이고 프로그램이 죽을 것이기 때문이다. 두 번째는, gradient 값이 너무 크다면 미리 정해준 적당한 값으로 잘라버리는 방법 (이 논문에서 다뤄졌다)이 매우 쉽고 효율적으로 이 문제를 해결하기 때문이다. Vanishing gradient 문제는 언제 발생하는지 바로 확인하기가 힘들고 간단한 해결법이 없기 때문에 더 큰 문제였다.

## F
1. Fast R-CNN

2. Faster R-CNN

3. Feedforward

4. Filter
   필터(Filter)는 커널(Kernel)이라고도 한다. CNN에서는 일반적으로 지도학습(supervised learning)의 방법을 사용하는데, 이는 라벨링된 이미지(labelled images)를 통해 CNN을 학습시켜야 함을 의미한다. CNN은 학습(training)을 통해 convolution filter의 weight를 최적화(optimize)하고 error를 최소화하는 filter의 모양을 스스로 형성한다. filter의 크기를 설정하는 것은 학습에 있어 매우 중요한데, 이는 앞단(입력 이미지)을 처리할 때 filter가 유의미한 특징(feature)을 추출할 수 있어야하기 때문이다.

5. F-measure /  F1 score
   F측정(F-measure)은 정확도(Precision)와 재현율(Recall)을 결합하여 하나의 값으로 표현하는 지표이다. 아래의 식에서 는 Precision과 Recall 중 어느 것에 비중을 둘지 결정한다. 예를 들어, 로 하면  측정이 되는데, Precision보다 Recall에 더 큰 비중을 두는 셈이다. F-measure에서 일반적으로 가장 많이 사용되는 지표는 로, Precision과 Recall을 같은 비중으로 본다.
	

6. Fully Connected Layer
   전연결층 또는 완전 연결 레이어(Fully Connected Layer)를 다른 말로 밀집 레이어(Dense Layer)라고도 한다. 각 노드가 후속 히든 레이어(Hidden Layer)의 모든 노드에 연결되어 있어 Fully Connected라고 부른다.

## G
1. Generalization
   학습에서 발생하는 에러가 아니라 모델의 성능 평가를 위한 테스트 상에서 발생하는 에러를 Generalization error라 한다. 모델의 성능을 테스트 할 때, training data와는 별개로 training에 사용되지 않은 데이터(unseen data)를 활용하여 평가하는데, training에 사용된 데이터와 test에 사용된 데이터는 서로 교점이 되는 데이터들이 없기 때문에 test를 Generalization이라 하고 test error를 generalization error라고 표현한다. 모델의 복잡도(Complexity)와 데이터를 표현하는 정보의 규모가 서로 매칭되지 않을 때 과적합/과소적합(Overfitting/ Underfitting)이  발생하고, 이를 Bad generalization이라고 한다.

2. Generative Model
   생성모델(Generative Model)은 이미지와 같은 학습 데이터를 디지털 에센스(digital essence)로 압축(200GB의 이미지를 100MB의 가중치(weight)로 줄일 수 있다.)한다. 이를 통해 데이터의 고유한 특징(distinctive features)을 자연스럽게 인식하며, 신경망에서 실제 데이터에 대한 축소된 이해(reduced understanding)를 바탕으로 실제 데이터와 유사(similar)하거나 구별할 수 없는(indistinguishable) 데이터를 만들어낸다. 주로 비지도 학습(Unsupervised Learning)에 사용되며, 학습을 하면 할수록 더 현실적인 이미지를 만들어낼 수 있다. 생성모델의 예로는 유사한 이미지를 생성하기 위해 실제 이미지셋에 대해 훈련된 모델을 들 수 있다.

3. Generative Adversarial Networks(GAN)
   적대적 학습(Adversarial Networks)을 통해 학습을 진행하는 생성 모델(Generative Model)을 위한 아키텍쳐(architecture)로, Discriminator(구분자)와 Generator(생성자)를 이용해 architecture를 구성한다. 이는 경찰과 위조지폐생성범의 관계로 비유할 수 있다. 구분자는 어떤 이미지에 대해 진짜 이미지인지 가짜 이미지(생성자에 의해 생성된)인지를 구분하도록 학습한다. 생성자는 잠재변수(latent variable, noise distribution에서 추출한 값)로 부터 생성한 이미지가 구분자를 잘 속일 수 있도록 학습한다. 결과적으로 생성자는 원래 데이터의 distribution을 거의 정확히 근사하게 되고, 구분자는 50% 확률로 진짜 이미지와 가짜 이미지(생성자에 의해 생성된)를 구분하는 균형점에 도달하게 된다. 새로운 이미지를 생성할 때는 학습된 생성자(Generator)를 사용한다.

Generative Adverarial Networks(GAN)의 Architecture

4. Gradient Descent
   경사하강법(Gradient Descent)는 학습 데이터의 조건에 따른 모델의 파라미터(parameter)를 기준으로 손실 함수(loss function)의 기울기(gradient)를 계산하여 손실을 최소화하는 방법을 말한다. 쉽게 말하자면, 이는 파라미터를 반복적으로 업데이트하면서 손실을 최소화하는 가중치(weihgt)와 편향(biase)의 가장 적절한 조합을 점진적으로 찾는 방식이다.

5. Grid Search
   하이퍼파라미터(Hyperparameter)를 Tuning하기 위한(최적조합을 찾기 위한) 기법으로, 일종의 Brute-force 알고리즘이다. 예를 들어, Regularization weight, 의 최적값을 찾고 싶다면, 일정한 후보값을 인간이 미리 선정하고 (e.g.  = {0.1, 0.3, 0.5, 0.8}) 해당 후보값으로 학습을 진행해보고 validation data set에 대해 가장 좋은 값이 나온 hyperparameter(e.g. =0.3)를 선택한다. 단점은 Brute-force 알고리즘이기 때문에 Tuning해야할 hyperparameter의 개수가 늘어남에 따라 연산량이 과도하게 증가하는 문제가 있다.

## H
1. He et al Initialization
   Kaiming He 등(He et al)이 제안한 이 초기화(Initialization) 방법은, Xavier Initialization과 유사하며 계수(factor)에 2를 곱하였다. 가중치(weight)는 이전 레이어(previous layer)의 크기에 따라 무작위로 초기화되며, 손실함수(loss function)의 최솟값(Global Minimum)을 더 빠르고 더 효율적으로 찾을 수 있다. 이는 제어된 초기화를 통해 더 빠르고 효율적인 경사하강(gradient descent)을 제공한다.

2. Heuristic
   휴리스틱(Heuristic)은 “to discover”이라는 의미를 가진다. 즉 이미 정립된 공식에 의해서가 아니라, 정보가 완전하지 않은 상황에서 시행착오(trial and error) 혹은 주먹구구식의 규칙(Rule of Thumb)을 통해 지식을 알게 되는 과정을 의미한다. 잘 추측하는 기술(art of good guessing) 이라고 표현하기도 한다. 이러한 면에서 Heuristic은 알고리즘(Algorithm)과 대비되는 개념이다. Heuristic은 해결책의 발견을 보장하지는 않지만 많은 쓸모없는 대안들을 직접 시도해보지 않고도 배제할 수 있기 때문에 알고리즘보다 효율적이라고 본다. Heuristic 방식은 이상적이지는 않지만 적절한 방법을 찾을 때까지 다양한 방법을 적용해 보는 방식을 말한다.

3. Hidden Layer
   히든 레이어(Hidden Layer)는 비지블 레이어(Visible Layer)와 반대되는 개념으로, 신경망(Neural Network)에서 입력 레이어(특성)와 출력 레이어(예측) 사이에 위치하는 합성 레이어를 말한다. 일반적으로 신경망에는 하나 이상의 히든 레이어가 포함된다.

4. HOG(Histogram of Oriented Gradient)
   HOG(Histogram of Oriented Gradient)는 이미지의 특성을 검출하는 알고리즘 중 하나로, 대상 영역을 일정 크기의 셀로 분할하여 각 셀마다 edge 픽셀(gradient magnitude가 일정 값 이상인 픽셀)들의 방향에 대한 히스토그램을 구한 후 bin 값들을 일렬로 연결한 벡터이다. 즉, HOG는 edge의 방향 히스토그램 템플릿으로 볼 수 있다. 히스토그램 매칭은 대상의 형태가 변해도 매칭을 할 수 있지만 대상의 기하학적 정보를 잃어버리고 단지 분포(구성비) 정보만을 기억하기 때문에 잘못된 대상과도 매칭이 되는 문제가 있다. HOG는 템플릿 매칭과 히스토그램 매칭의 중간 단계에 있는 매칭 방법으로 볼 수 있으며 블록 단위로는 기하학적 정보를 유지하되, 각 블록 내부에서는 히스토그램을 사용함으로써 로컬한 변화에는 어느 정도 강인한(Robust) 특성을 가지고 있다. HOG는 일종의 템플릿 매칭이기 때문에 물체가 회전된 경우나 형태변화가 심한 경우에는 검출이 힘들기 때문에 형태변화가 심하지 않고 내부 패턴이 단순하며 물체의 윤곽선으로 물체를 식별할 수 있을 경우에 적합하다.

5. Hyperparameter
   머신러닝 알고리즘의 학습(Training)을 진행하기 전에 사람이 직접 손으로 지정해주어야만 하는 값들을 의미한다. 예를 들어, Gradient Descent 알고리즘의 경우 Learning rate, 와 Regularization을 Cost function에 추가할 경우 Regularization weight,  등이 초매개변수(hyperparameter)에 해당된다.  적절한 hyperparameter값은 머신 러닝 알고리즘의 학습을 진행하기 전에 사람이 직접 지정해주어야 하는 것에 반해, parameter는 학습 과정에서 머신 러닝 알고리즘이 적절한 값을 자동으로 찾아낸다.

## I
1. Inference
   학습이 완료된 모델이 테스트 셋에 대하여 예측을 수행하는 과정을 추론(Inference)이라고 한다. 통계학에서는 특정 관찰 데이터에 맞게 분포의 매개변수를 조정하는 과정을 의미한다.

2. Interpolation
   선형보간법(Interpolation)은 알려진 지점의 값 사이에 위치한 값을 알려진 값으로부터 추정하는 것을 말한다.

3. Iteration
   iteration은 batch size만큼의 학습데이터가 알고리즘을 돈 횟수를 말한다. 신경망의 관점에서는 batch size의 학습데이터에 대해 순전파/역전파(forward/backward pass)를 한번 거치는 것을 1 iteration이라고 한다. 쉽게 말하면, pass(=forward pass+backward pass)의 횟수이다. 예를 들어, 1000개의 학습데이터가 있고, batch size는 500이라 하자. 1epoch를 마치는데 2 iteration을 거쳐야 한다. 간단히 생각하면, iteration = (전체데이터 수)/(batch size)가 된다.

## K
1. K-means clustering
   K-평균 클러스터링(K-means clustering)은 비지도학습(Unsupervised Learning) 알고리즘 중 간단하면서도 인기가 많은 알고리즘 중 하나이다. 이는 무작위로 선정된 중심(centroid)에서 부터 시작해, 중심의 위치를 반복적으로 수정하며 적합한 위치를 찾는다. 중심의 위치가 안정화되면(stabilize) 주어진 데이터는 k개의 클러스터(Cluster)로 묶이며, 각 클러스터와 거리 차이의 분산이 최소화된다. 이렇게 묶인 클러스터에 대해 라벨링(Labeling)을 할 수 있다.

2. K-Nearest Neighbor(KNN)
   K-최근접 이웃(K-Nearest Neighbor)은 구현하기 쉬운 기계학습 알고리즘 중 하나이다. 모델을 통해 학습된 데이터는 어떤 특성(feature)에 따라 군집을 형성한다. 이후 범주를 알지 못하는 새로운 데이터가 들어왔을 때, 기존의 데이터가 이루고 있는 군집 중 어느 군집에 속하는지를 판단할 수 있다. 그 판단의 기준은 최근접(Nearest)이라는 말에서 찾을 수 있는데, 입력데이터와 가장 가까이 있는 군집으로 분류된다.

## L
1. Label
   지도 학습(Supervised Learning)에서 학습데이터와 함께 짝지어지는 '답'을 의미한다. 이미지 학습데이터에 대해서는 라벨(Label)이 그라운드 트루스(ground truth)가 된다. 가령, 주택 데이터에 대한 특성(feature)이 침실 수, 화장실 수, 주택의 연령일 때, 라벨(label)은 주택의 가격일 수 있다. 스팸 메일 감지 데이터의 경우 특성은 제목, 보낸 사람, 이메일 메시지 자체일 수 있고 라벨은 '스팸' 또는 '스팸 아님'으로 지정할 수 있다.

2. Layer
   신경망(Neural Network)에서 입력을 처리하거나 출력을 내보내는 뉴런 집합이다. 흔히 층이라고도 표현하는데, 일반적으로 층이 깊어질수록(Deep) 네트워크가 표현할 수 있는 정보의 양이 풍부해진다.

3. Learning rate
   학습률(Learning rate) 또는 학습속도라고도 한다. 보폭(step size)과도 같은 의미를 지니나, 크기보다 속도적인 관점에서 표현할 때 learning rate라고 한다. 아래 그림에서는 학습 과정에서 학습률(learning rate)의 중요성을 확인할 수 있다. 높은 학습률(high learning rate)은 손실함수(loss function)의 지수적인 감소(exponential decay)를 보이는 반면, 낮은 학습률(low learning rate)은 선형적인 감소(linear decay)를 보인다. 빠르게 손실값을 찾아가는 높은 학습률이 더 좋아 보일수도 있지만, 간혹 더 나쁜 손실값에 갇힐 수도 있다.

4. Linear Regression(선형 회귀)
   선형 함수를 이용해서 데이터를 Regression하는 기법. 가장 기본적인 머신 러닝 기법이다. 데이터가 선형적으로(Linearly) 분포하지 않을 경우, 예측률이 떨어지는 단점이 있다. 아래 수식으로 표현된다.

5. Localization
   위치 표시
   
6. Logistic Regression
   선형 예측에 로지스틱(Logistic) 또는 시그모이드(Sigmoid) 함수를 적용하여 불연속값(discrete value)에 대한 확률을 생성하는 일종의 분류(Classfication) 기법이다. 로지스틱 회귀(Logistic Regression)는 주로 이진 분류(Binary Classification) 문제에 사용된다.

7. Loss Function
   손실함수(Loss function)는 주로 데이터점수(data point), 예측(prediction), 라벨(label)에 대해서 정의되며 오차와 같은 패널티(penalty)를 계산하는 함수로써 이해된다. 비용함수와 종종 비교되지만, 엄밀히 말하자면 손실함수가 조금 더 좁은(fine) 개념이다. 쉽게 말하자면, 단일 학습 데이터(single training example)는 손실함수, 전체 학습 데이터(entire training example)는 비용함수로 이해해도 무방하다.

## M
1. Maximum Likelihood Estimation(MLE)
   우도(Likelihood)가 최대가 되는 파라미터들을 찾는 문제

2. Mean Squared Error(MSE)
   평균 제곱 오차. 대표적인 Cost Function 중 하나이다. 모델의 예측값(Prediction), 과 실제 타겟값(True target value), 과의 차이를 제곱해서 모두 더한 값들의 평균으로 정의된다. 모델의 성능을 측정(Measure)하는 지표로서 활용된다. 즉, MSE가 작을수록 더 좋은 모델임을 알 수 있다.

3. Metric
   측정항목(Metric)은 학습에 있어서 최적화를 시도하는 대상이거나 그 자체로써 유의미한 수치를 말한다.

4. Mini-batch
   업데이트(Update)를 할 때, 미니배치(mini-batch) 방식은 전체 데이터셋을 한꺼번에 사용하지 않고 조금씩 쪼개어 사용하는 개념이다. 단, mini-batch 집합의 선정은 가급적이면 상호연관성(correlation)이 적어 전체 집합을 대표하는 것을 보장해야 한다. 다시 말해, 전체 데이터의 스펙트럼 중 일부분에 몰려있는 데이터를 사용하게 된다면 대표성을 보장할 수 없어, 고르게 퍼져있는 데이터를 선정해야 한다는 뜻이다. 
 
5. MNIST
   머신러닝을 공부하는 사람들이 가장 먼저 접하게 되는 데이터셋. 머신 러닝 분야의 “Hello World”라고 볼 수 있다. 60,000장의 트레이닝 데이터와 10,000장의 테스트 데이터로 정제되어 있고 0~9사이의 28×28 크기의 필기체 이미지로 구성되어 있다. http://yann.lecun.com/exdb/mnist/ 에서 다운로드 받을 수 있다.

6. Momentum
   모멘텀(Momentum)은 경사하강(Gradient Descent)을 통해 최적값을 찾아갈 때 파라미터 벡터(Parameter Vector)의 속도에 일종의 관성을 주는 방식을 말한다. 이는 최적화 문제(optimization problem)를 물리학적 관점에서 바라보는 데서 출발한다. 최적화(Optimization)를 할 때 parameter vector가 업데이트 되는 것을, 언덕에서 물체를 굴리는 것에 비유한다면 아래와 같이 해석할 수 있다.
   (1) 포텐셜 에너지(Potential Energy, U=mgh) = 손실함수(loss function)
   (2) 물체에 속도를 주지 않은 채 언덕 위에 가만히 두는 것 = 파라미터의 초기값(Initial Value) 설정
   (3) 물체에 가해지는 힘은 potential energy의 Gradient()와 크기가 같다 = 파라미터 벡터에 가해지는 힘은 loss function의 Gradient와 크기가 같다.
   물리학적 관점에서, Momentum update는 Gradient가 오직 속도(velocity)에만 직접적으로 영향을 주고, 속도가 위치값(position)에 영향을 준다. Momentum update를 사용하면, Parameter Vector가 업데이트되는 방향과는 별개로, 이전에 이동했던 방식을 기억하면서 그 방향으로 관성을 주며 이동하게 된다.

7. Multi-Scale image
   우리는 보통 어떤 물체에 대해서 특정영역의 수치로써 표현하곤 한다. 가령, 나무에서 가지의 길이는 cm에서 m까지로, nm, km의 단위로 논할 필요가 없는 것이다. 이는 오히려 잎사귀를 구성하는 분자, 나무가 자라는 숲의 단위에 가깝다. 즉, 수치는 물체를 설명하는 다양한 방식이 될 수 있다. 이러한 개념은 지도를 만들 때, 축척의 개념에서 자주 사용된다. 실세계에서 정보를 추출하고 자동으로 분석하는 방법을 디자인할 때 multi-scale 표현법이 필요하다.

## N
1. Negative Log Likelihood(NLL)
   Maximum Likelihood Estimation(MLE)을 negative 형태로 바꿔서 formulation한 형태. 즉, Negative Log Likelihood(NLL) formulation에서는 maximize하는 parameter가 아니라 minimize하는 파라미터를 찾게 된다. 보통 Optimization Algorithm이 Objective Function을 minimize하도록 구현되어 있기 때문에 MLE문제를 NLL 형태로 바꿔서 최적화(Optimization)하는 경우가 많다.

2. Nesterov Accelerated Gradient (NAG)
   Nesterov Accelerated Gradient(NAG)는 기본적으로 모멘텀 업데이트(Momentum update)와 유사하지만, gradient를 계산하는 방법이 미묘하게 다르다. Momentum update는 actual step을 계산할 때 현 위치를 기준으로 gradient step과 momentum step을 합한 방향으로 이동하기 때문에, 최적값에 도달했을 때 멈추지 못하고 관성에 의해 멀리 가버릴 수도 있다. 반면, NAG 방식의 경우는 일단 momentum step을 이동한 위치에서 gradient step을 내다본 후(“lookahead”) 이동 방향을 결정하게 되기 때문에, Momentum 방식에 비해 보다 효과적으로 이동할 수 있다. 결과적으로 NAG는 Momentum update의 빠른 이동속도에 대한 이점은 유지하면서, 멈춰야 할 시점에서 제동을 걸기에도 용이한 방식이다. 

3. Normalization
   정규화(Normalization)는 어떤 값들을 정규화 된 상태로 변환하여 변수의 범위를 일정하게 혹은 비교 가능하게 하려는 것을 말한다. 예를 들어, 아래 식을 이용해서 데이터들의 평균(mean)이 0이고 표준 편차(standard deviation)가 1인 상태로 원본 데이터 X의 분포를 정규화할 수 있다.

## O
1. Object Recognition
   객체 인식

2. One-hot encoding
   범주형값(Categorical value)을 이진화된 값(binary value)로 바꿔서 표현하는 것. 범주형 데이터에 머신러닝 알고리즘을 적용하고자 할 때 거의 대부분 사용된다. 예를 들어 “한국”, “미국”, “일본”이라는 세 개의 범주형 데이터가 있을 때, 이를 “한국”=1,”미국”=2,”일본=”3″이라고 단순하게 integer encoding으로 변환하여 표현할 수도 있지만 one-hot encoding을 사용하면 “한국”=[1 0 0],”미국”=[0 1 0], “일본”=[0 0 1] 이런 형태로 binary value로 표현한다. 단순한 integer encoding의 문제점은 머신러닝 알고리즘이 integer value로부터 잘못된 경향성을 학습하게 될 수도 있다는 점이다. 예를 들어, 위의 예시의 경우 integer encoding을 사용할 경우 머신러닝 알고리즘이 “한국”(=1)과 “일본”(=3)의 평균(1+3/2=2)은 “미국”(=2)이다. 라는 지식을 학습할 수도 있는데 이는 명백히 잘못된 학습이다.

3. Optimization
   딥러닝 모델 학습에 있어서 최적화(Optimization)란 일반적으로 파라미터의 최적화를 의미한다. 최적값을 찾는 과정은 산 정상을 내려갈 때, 지름길을 찾아 빠른 보폭으로 내려가는 것과 비교할 수 있다. 일단 산을 손실함수(loss function) 혹은 비용함수(cost function)라고 하자. 정상에서 내려갈 수 있는 여러 갈래 중 지름길을 찾는 것은 스텝의 방향을 잘 설정하는 것과 같고, 빠른 걸음으로 내려오는 것은 스텝의 크기(step size) 혹은 학습률(learning rate)과 같다. 적절한 최적화를 위해서는 스텝의 크기와 방향 두 가지 요소가 모두 충족되어야 한다.

4. Optimizer
   Optimizer은 최적화(Optimization)를 위한 알고리즘 혹은 기법을 의미한다. 이 최적화기법(Optimizer)는 스텝의 방향과 스텝 사이즈(step size)에 따라 분류될 수 있다.

5. Overfitting
   모델의 복잡도(Complexity)에 비해 학습데이터가 단순하면, 학습을 하면서 weight의 값이 점점 커지고 모델은 학습데이터에 영향을 많이 받게 되어 결국 학습데이터에 모델이 맞춰지는 과적합(Overfitting) 현상이 발생한다. 이를 다르게 표현하면 local noise의 영향을 크게 받아, outlier들에 모델이 맞춰지는 현상이라고 할 수 있다. 학습 과정에서 머신 러닝 알고리즘이 Training Data에 과도하게 최적화되어 Training Data에 대해서는 잘 동작하지만 이제까지 보지 못한 새로운 데이터들인 Test Data에 대해서는 잘 동작하지 못하는 현상을 말한다. 즉, Generalization 능력이 떨어지게 학습이 된 상황을 뜻한다. 보통 머신 러닝 알고리즘의 표현력이 지나치게 강력할 경우 발생하는 현상이다. 이를 방지하기 위해 Regularization 등의 기법을 이용한다.

Overfitting이 발생한 상황(맨 오른쪽 그림)

## P
1. Parameter
   머신러닝 알고리즘이 학습 과정(Training)을 통해서 업데이트하는 값들. 보통 로 표현한다. Neural Networks 구조를 이용할 경우 학습과정에서 업데이트되는 Weights, W와 Bias, b가 Parameter가 된다. 즉, =(W,b)

2. PASCAL VOC(Visual Object Challenge)
   PASCAL VOC 20클래스

3. Perceptual Grouping
   지각적 그룹화(Perceptual grouping)는 시각적 인지 과정에 있어 이미지의 특정 영역에 대해 물체나 패턴과 같은 고차원의 지각적인 개체(perceptual unit)로 묶는 일련의 과정을 말한다.

4. Pooling(Subsampling)
   Convolutional Neural Networks(CNN)의 Pooling(Subsampling) Layer에서 차원 축소를 위해 수행하는 연산. 필터 사이즈 안에서 최댓값을 추출하는 Max Pooling, 평균값을 추출하는 Average Pooling, 최솟값을 추출하는 Min Pooling이 있다.

5. Precision
   정확도(Precision)은 혼동행렬(Confusion Matrix)에서 찾은 것(TP, FP) 중에 올바르게 찾은 것(TP)의 비율이다. 예를 들어, A와 B라는 제품을 분류하는 기계가 있을 때 A로 분류한 것의 개수 중 A를 A로 올바르게 분류한 것()만을 포함한 비율을 말한다.

6. Pretrained model
   미리 학습이 끝내 파라미터가 최적화된 모델을 말한다. 모델에서 미리 학습된 파라미터를 신경망에 입력하는 경우도 있다. 반대로, 전이학습(Transfer Learning)을 통해 미리 학습된 모델(Pretrained model)을 불러들인 후 학습데이터에 맞게 fine tuning하여 사용하는 방법이 있다.

## R
1. Random Initialization
   초기 가중치(Initial weight)를 적절히 설정하는 것은, 손실함수(loss function)에서 최솟값(Global minimum)을 찾는데 매우 중요한 역할을 한다. 무작위 초기화(Random Initialization)는 초기 가중치를 임의의 0에 가까운 값으로 초기화한다.

2. R-CNN
   
3. Recall
   재현율(Recall)은 혼동행렬(Confusion Matrix)에서 찾아야 하는 것(TP, FN) 중에 올바르게 찾은 것(TP)의 비율이다. 예를 들어, A와 B라는 제품을 분류하는 기계가 있을 때 A제품 전체 중 A를 올바르게 분류한 것()만을 포함한 비율을 말한다.

4. Receptive Field Size
   https://www.quora.com/What-is-a-receptive-field-in-a-convolutional-neural-network
   CNN에서 Receptive field는 각 단계의 입력 이미지에 대해 하나의 필터가 커버할 수 있는 이미지 영역의 일부를 뜻한다. receptive field는 convolutional layer가 깊어질수록 선형적(linearly)으로 증가하고, atrous convolutions를 쌓을때는 기하급수적(exponentially)으로 증가한다. 아래의 그림에서 왼쪽 검붉은 영역이 receptive field이다. 그림에서 살펴볼 수 있듯이 receptive field는 layer를 거치게 되면서 채널(channel) 영역으로는 길어지지만, 공간적(spatial)으로는 작아짐을 알 수 있다. 그 다음 필터는 이 receptive field를 보게 되고, 단계를 거칠수록 각각의 필터가 볼 수 있는 영역(receptive field)을 확장시킴으로써 구조적으로 효율을 높인다.

5. Regression
   데이터로부터 continuous value(연속값)을 예측(Prediction)하는 문제. 예를 들어, 다년간의 집값의 변동추이를 가지고 다음 달의 집값은 얼마일지?, 몇 주간의 온도 데이터를 이용하여 내일의 온도는 몇 도일지? 등의 문제를 맞추는 것이 Regression(회귀) 문제이다.

6. Regularization
   학습에서 발생하는 에러(training error)가 아닌, 모델의 성능 평가를 위한 테스트 상에서 발생하는 에러(generalization error)를 줄이기 위하여 학습 알고리즘을 수정하는 기법. 간단히 말해서, generalization을 개선하기 위한 방법이다. 일반화(Regularization)을 통해 학습의 방향이 error function/cost function 뿐만 아니라 weight의 값들 역시 최소가 되는 방향으로 진행된다. 이를 가중치 감쇠(weight decay)라고도 한다. 

7. ReLU
   Rectified Linear Unit(ReLU)의 약자. Neural Networks의 Activation function 중 하나. 최근에 sigmoid activation function 대신 많이 사용된다.

   ReLU Activation function은 기존의 sigmoid activation function과 비교해서 다음의 두 가지 장점을 가진다.

   (1) 기존의 sigmoid activation function은 x의 값이 일정 수준 이상 커지거나 작아지면 기울기(gradient) 값이 0이 되어 layer를 깊게 쌓을 때 Vanishing Gradient Problem이 발생하였다. 이에 반해, ReLU activation function은 x가 0보다 크면 항상 1의 기울기(gradient)를 가지므로 Vanishing Gradient Problem이 발생할 가능성이 줄어든다.
   (2) ReLU activation function의 경우 x가 0보다 작으면 0의 기울기 값을 가지므로 Hidden unit들이 sparse하게 특징을 학습하도록 유도할 수 있다.

ReLU Activation Function

8. Resampling
   리샘플링(Resampling)은 모분포의 형태를 알 수 없을 때, 현재 갖고 있는 데이터의 일부분을 재추출하여 분포를 만든 후 관측하는 값의 통계적 의미를 확인하는 방법이다. 샘플링을 처음부터 다시 하는 것이 아닌, 이미 수집한 데이터로 다시 샘플링하는 방법을 일컫는다. 간단히 말하자면, 전체 훈련데이터(training set)에서 일부 샘플을 반복적으로 추출한 후, 이를 관측하여 추가적인 정보를 얻는 방법이다. 결과적으로 데이터 분포의 변화에 따른 모델의 변화를 관측하고 평가할 수 있게 된다.

9. Restricted Boltzmann Machine(RBM)
   제한된 볼츠만 기계(Restricted Boltzmann Machine, RBM)는 인공신경망으로 해석될 수 있는 확률 그래프 모델 중 하나로, 비지도 학습(unsupervised learning) 방식을 따른다. 한 개의 RBM은 가시 레이어(visible layer)와 히든 레이어(hidden layer), 그리고 각 레이어 간 모든 뉴런들의 연결로 구성되어 있다. 경사하강법(gradient descent)에 대한 근사(approximation)인 Contrastive Divergence(CD)를 이용하여 RBM을 효율적으로 학습할 수 있다. 아래 그림에서 확인할 수 있듯이, RBM과 BM의 차이는 hidden-to-hidden / visible-to-visible layer의 연결(connection) 유무에 있다. 이 간단한 차이로 인해 RBM은 실제 구현이 가능하고, BM은 구현이 매우 어렵다. 

10. RMSProp
   Adagrad는 아래로 볼록(convex)한 환경에서는 빠르게 수렴하지만, non-convex 환경에서는 학습률(learning rate)이 너무 작아져 극솟값(local minimum)에 갇혀버리는 한계를 보인다. 이를 극복하기 위해 제안된 방식이 RMSProp이다. 이는 Adagrad의 기울기 제곱 합(gradient accumulation) 방식 대신 지수적으로 감소하는 평균(exponentially decaying average)을 사용하여 학습률이 무한정 작아지지 않게 한다. 결과적으로 RMSProp은 AdaGrad보다 non-convex 환경에서 더 좋은 성능을 보인다.

11. Robust(강건)
   Robust하다는 것은 어떠한 상황에 처하더라도 비슷한 성능을 발휘한다는 뜻이다. 다시 말하면, 시스템이 작동하는 외부환경이 변할 때 성능을 얼마나 잘 유지하는지를 나타낸다. 조명의 변화 또는 대상물을 찍는 거리나 각도가 변함에도 불구하고 성능이 그대로 유지되거나 적은 양만 저하되는 경우를 강건하다고 말한다. 사람의 시각은 매우 강건하다. 컴퓨터 비전 시스템도 쓸모가 있으려면 강건해야 한다.

## S
1. Saddle Point
   안장점(Saddle Point)는 어느 방향에서 보면 극댓값(Local Maxima)이지만 다른 방향에서 보면 극솟값(Local Minima)이 되는 점이다. 이차원의 시각에서 보았을 때, 어느 방향에서는 아래로 굽어있지만 다른 방향에서는 위로 굽어있는 모양이 안장과 닮았다고 하여 붙여진 이름이다. 등고선(Contour)의 관점에서 Saddle Point는 두 등고선의 교차점으로 나타난다.

2. Semantic Segmentation
   의미론적 분할(Semantic Segmentation)은 단순히 주어진 이미지를 분류하는 것에 그치지 않고, 장면에 대한 완전한 이해를 통해 픽셀단위의 분류를 해야 하는 고차원의 문제이다. Semantic segmentation을 위한 과정은 큰 덩어리에서 시작해서 촘촘하게(coarse-to-fine) 진행하는 방법으로 이해할 수 있다. 입력 이미지에 대해서 rough한 분류(Classification)를 먼저 진행하고, 객체의 위치를 표시(localization)/탐지(detection)한다. 마지막으로, 분할 과정에서는 모든 픽셀에 대해 객체 혹은 영역 단위의 클래스로 라벨링(labeling)한다.

3. Session
   세션(Session)은 컴퓨터 공학에서 광범위하게 사용되는 용어 중 하나이다. 보통은 “웹서버가 클라이언트와 정보를 교환하는 통신을 주고받는 기간”을 의미한다. 예를 들어, 웹사이트에서 사용자가 로그인을 하게 되면 웹서버는 세션을 열어서 로그인한 사용자 정보를 저장하고 있다가 사용자가 로그아웃하면 웹서버는 저장하고 있던 사용자에 대한 정보를 삭제하게 된다. 텐서플로우(Tensorflow)에서도 세션, tf.Session()을 열면 그래프 상에서 텐서를 주고받게 되고 이에 대한 정보를 저장하고 있다가, 세션을 종료하면 저장하고 있던 정보를 삭제한다. 세션을 열기 전에는 그래프 형태만 정의된 상태이므로 실제 값을 주고받을 수 없다. 즉, 그래프 상의 노드들을 실제로 실행해서 값을 할당하려면 Session.run()을 실행해야만 한다.

4. SIFT(Scale Invariant Feature Transform)
   SIFT는 이미지의 특성을 검출하는 알고리즘(feature detection algorithm) 중 하나로, 이미지와 모델의 특징점 대 특징점으로 매칭을 하기 때문에, 대상의 크기, 형태, 방향(회전) 변화에 강인(Robust)하다는 장점이 있다. 이미지에서 특징점들을 선택하고 각 특징점을 중심으로 한 로컬 패치(local patch)에 대해 아래 그림과 같이 특징 벡터를 추출한다. 이 특징벡터는 영상패치를 4 x 4 블록으로 나누고 각 블록에 속한 픽셀들의 gradient 방향과 크기에 대한 히스토그램을 구한 후, 이 히스토그램 bin 값들을 일렬로 연결한 128차원 벡터이다. 이러한 특성에 비추어 보았을 때, SIFT는 액자 그림과 같이 내부 패턴이 복잡하여 특징점이 풍부한 경우에 적합한 방법이다.

5. Sigmoid Function
   Neural Networks의 Activation function 중 하나. 0~1 사이의 출력값을 갖는다.

   로 정의된다. 최근에는 Vanishing Gradient Problem에 취약하다고 판단되어서 많이 사용되지 않는다. 구체적으로 인풋 값이 너무 커지거나 작아지면 해당 구간에서의 미분값(Gradient)가 0이 되는 문제가 있다. (그림에서 약 -6이하, 6이상인 구간)

6. Subsampling
   여러 층의 컨볼루션 레이어(Convolution Layer)만으로도 신경망을 구성하는 것이 가능하지만, 보다 함축적이고 일반적인(General) 이미지의 형상 혹은 피처맵(feature map)을 얻기 위해서는 풀링 레이어(Pooling Layer)를 통해 subsampling을 해야 한다. 풀링 레이어는 입력된 피처맵을 낮은 차원의 피처맵으로 만드는 역할을 한다. 가령, 96X96 피처맵을 2X2 패치(patch)들로 쪼개면, 이는 48X48 피처맵이 되고, 각각의 2X2 패치는 최대/평균 풀링(max/average pooling) 등의 연산을 통해 subsampling된다.
   
7. Support Vector Machine(SVM)
   비선형 문제를 신경망(Neural Network)으로 풀 수는 있지만, 학습에 오랜 시간이 걸린다는 단점 때문에, 짧은 시간에도 비교적 정확도가 높은 모형을 학습할 수 있는 서포트 벡터 머신(Support Vector Machine, SVM)을 종종 사용한다. 이는 분류 과업에 사용되는 지도학습 알고리즘으로, 커널이라는 방법을 통해 분리선(분리초평면, hyperplane)을 선형에서 비선형으로 변환할 수 있다.

8. Softmax Function
   Classification 문제에서 Neural Networks의 마지막 Layer에서 주로 사용되는 Activation function 중 하나. 모두 더하면 1이 되는 normalized 된 함수이다. 어떤 Vector에 Softmax Function을 씌우면, 가장 큰 값(max value)는 여전히 가장 큰 값으로 남아있고, 다른 값들도 남아있기 때문에 softmax(“soft”+”max”)라고 불린다. 우리가 일반적으로 생각하는 가장 큰 값(max value)만 남기고 나머지 값들은 모두 0으로 취하는 max function은 hardmax(“hard”+”max”)라고 부른다. Softmax Function의 Output은 각각의 Label에 대해 예측한 확률값이 된다. 예를 들어, 어떤 사진이 [개, 고양이, 호랑이]인지를 분류하는 Classification 문제의 Softmax Function의 출력값이 [0.7, 0.2, 0.1]이라면 우리가 만든 분류기가 이 사진이 개일 확률을 70%, 고양이인 확률은 20%, 호랑이일 확률은 10%로 예측했다고 해석할 수 있다. 수식으로는 아래와 같이 표현된다. 

9. Step size
   학습속도(Learning rate)와 동일한 의미를 가지며, 속도보다 크기나 보폭의 관점에서 이야기할 때 step size라고 한다. 손실함수(loss function)에서 최솟값(global minimum)을 찾을 때, 보폭(step size)이 너무 작으면 학습에 너무 오랜 시간이 걸리거나 극솟값(local minimum)에 갇혀버리는 문제가 발생할 수 있고, 반대로 보폭이 너무 크면 최적값(optimal value)을 지나치는 경우가 있을 수 있다. 결국 적절한 step size를 선택하는 것은 최적화(Optimization)에 있어 매우 중요한 요인이다.

10. Stride
   스트라이드(Stride)란 합성곱 레이어(Convolutional Layer) 혹은 풀링 레이어(Pooling Layer)에서 윈도우 슬라이딩(Window Sliding)의 보폭을 의미한다. 가령, 5X5 타일과 그 위를 움직이는 3X3의 윈도우가 있을 때, 스트라이드는 윈도우를 얼마만큼 오른쪽으로 이동시킬 것인가를 결정한다. 스트라이드가 1인 경우, 아래 그림과 같이 움직인다.

## T
1. tanh Function
   Hyperbolic Tangent(tanh) 함수는 시그모이드(Sigmoid)의 대체제로 사용될 수 있는 활성화 함수(Activation Function)이다. tanh는 그 형태가 Sigmoid와 매우 유사하다. 실제로, Hyperbolic Tangent 함수는 확장 된 시그모이드 함수이다. tanh와 Sigmoid의 차이점은 Sigmoid의 출력 범위가 0에서 1 사이인 반면 tanh와 출력 범위는 -1에서 1사이라는 점이다. tanh는 Sigmoid에 비해 출력 범위가 더 넓고 경사면(gradient)이 큰 범위가 더 넓기 때문에 더 빠르게 수렴하여 학습하는 특성이 있다. Sigmoid와 비교하여 중심점이 0이고 기울기가 큰 범위가 넓은 차이점이 있지만 Sigmoid의 치명적인 단점인 Vanishing gradient problem 문제를 그대로 갖고 있다.

2. Test Bed
   테스트베드(Test Bed)는 과학 이론, 계산 도구, 신기술에 대해 엄격하고, 투명하고, 재현 가능한 테스트를 수행하기 위한 플랫폼이다. 이 용어는 실험적인 연구 및 신제품 개발 플랫폼과 환경을 기술하기 위한 수많은 원리들을 따른다.

3. Transfer Learning
   충분한 양의 데이터셋(dataset)을 갖추는 것은 쉽지 않다. 때문에 합성곱 신경망(Convolutional Network)을 무작위 초기화(Random Initialization)를 통해 바닥부터 학습(training from scratch)시키는 사람은 거의 없다. 대신에 Image-Net(100개의 레이블에 대해 120만개의 이미지가 있다)과 같은 방대한 데이터셋에서 모델을 미리 학습(pre-train)시킨 다음, 이 모델을 초기화(Initialization) 또는 고정 특징 추출기(Fixed Feature Extractor)로써 사용한다. 이를 전이학습(Transfer Learning)이라고 한다. 다음은 전이학습의 2가지 주요 방식이다.
   [1] 합성곱 신경망의 미세조정(Fine-tuning): 무작위 초기화 대신, 신경망을 Image-Net 1000 데이터셋 등으로 미리 학습한(pre-trained) 신경망으로 초기화한다. 학습의 나머지 과정은 동일하다.
   [2] 특징 추출기로써의 합성곱 신경망: 전연결층(Fully connected layer)을 제외한 모든 신경망의 가중치(weight)를 고정하고, 전연결층만 가중치를 학습한다.

## U
1. Underfitting
   과적합(Overfitting)의 반대 현상을 과소적합(Underfitting)이라고 하는데, 모델의 단순도에 비해 학습데이터가 너무 많을 때 Underfitting이 일어난다. 학습 과정에서 머신 러닝 알고리즘이 Training Data도 제대로 학습하지(fitting) 못하는 상황. 보통 머신 러닝 모델의 표현력이 너무 약하거나 최적화(Optimization)가 잘 이루어지지 않아서 발생한다. 해결하기 위해서는 더욱 강력한 표현력을 가진 모델을 사용하거나 더 발전된 형태의 Optimization Algorithm을 사용해야한다.

Underfitting이 발생한 상황(맨 왼쪽 그림)

## V
1. Validation Set
   검증세트(validation set)는 데이터 세트(data set) 중에서 트레이닝셋(training set) 및 테스트셋(test set)과 구분되며, 초매개변수(hyperparameter)를 조정하는 데 사용하는 데이터이다.

2. Vanilla SGD
   Vanilla는 하얗고, pure, naive한 이미지를 가진다. 즉, 아무런 추가 기능이 없는 basic한 SGD를 의미한다.

3. Vanishing Gradient Problem
   활성화함수(Activation Function) 중 tanh 함수와 sigmoid 함수는 양쪽 끝으로 갈수록 기울기(gradient)가 0으로 수렴하는 것을 볼 수 있다. 역전파(back propagation)를 통해 인공신경망을 튜닝(tuning)할 때, gradient에 대한 연쇄법칙(chain rule)이 적용되기 때문에 앞쪽 레이어로 갈수록 거의 사라져버린다. 결국 신경망은 매우 느린 속도로 학습하게 되고, 손실함수(loss function)에서 최솟값(global minimum)에 도달하지 못한 채 극솟값(local minimum)에 갇히는 문제가 발생한다. 결과적으로 앞쪽 레이어의 파라미터를 튜닝(tuning)하기 어렵게 만드는데, 이를 사라지는 기울기 문제(Vanishing Gradient Problem)라고 표현한다. 다음은 이 문제를 해결하기 위해 제시된 주요 방법이다.
   (1) 활성화 함수로 tanh나 sigmoid 대신 ReLU를 사용한다.
   (2) 가중치(weight)가 활성화 함수의 포화영역(Saturation region)에서 초기화되지 않게 조절하고, 낮은 학습률(learning rate)을 설정한다.
   (3) 배치 정규화(Batch Normalization)를 사용한다.

4. Variational Auto-Encoder(VAE)
   VAE는 데이터가 생성되는 과정, 즉 데이터의 확률분포를 학습하기 위한 두 개의 신경망(encoder, decoder)으로 구성되어 있다. VAE는 잠재변수(latent variable) z를 가정하고 있는데, encoder는 입력 데이터(x)를 추상화하여 잠재적인 특징을 추출(잠재변수, z)하는 역할을 하고, decoder는 encoder가 만든 잠재변수(z)를 활용해 원 데이터(x)를 복원해내는 역할을 한다. 잘 학습된 VAE는 임의의 z값을 decoder에 넣으면 다양한 데이터를 생성할 수 있다. VAE 아키텍처는 다음 그림과 같다.

5. Voting
   투표(Voting)은 앙상블 러닝(Ensemble Learning)에서 최종 결론을 도출할 때 사용되는 방법 중 하나로, 주로 분류를 위해 사용된다. 이중 다수결 투표(Majority Voting)는 말 그대로 다수결을 채택하며, 전체 모델 중 과반수가 예측한 결과를 최종 결론으로 도출한다. 이 경우 어떠한 결론도 과반수의 투표를 획득하지 못한다면, 안정적인 결론을 도출하기 어렵다는 단점이 있다. 또 다른 방법으로는 Weighted Voting이 있는데 이는 특정 모델들에 가중치를 주어 최종 결론을 도출한다.
6. Visual Reasoning
   시각적 추론(Visual reasoning) is the process of manipulating one's mental image of an object in order to reach a certain conclusion – for example, mentally constructing a piece of machinery to experiment with different mechanisms. In a frequently cited paper in the journal Science[1] and a later book[2] Eugene S. Ferguson, a mechanical engineer and historian of technology, claims that visual reasoning is a widely used tool used in creating technological artefacts. There is ample evidence that visual methods, particularly drawing, play a central role in creating artefacts. Ferguson's visual reasoning also has parallels in philosopher David Gooding's[3] argument that experimental scientists work with a combination of action, instruments, objects and procedures as well as words. That is, with a significant non-verbal component.

## W
1. Weakly Supervised Localization
   일반적인 Supervised Learning에서 데이터셋은 어디에 물체가 있는지에 대한 정보를 바운딩 박스(Bounding Box)를 통해 모든 이미지에 주는데, 일일이 작업해야하기 때문에 데이터셋을 만들기가 어렵다. 반면, Weakly supervised localization에서 데이터셋은 이미지와 라벨만 존재하고 네트워크가 알아서 해당 물체가 이미지의 어느 부분에 있는지를 detect한다. 
   (1) 이는 의료 영상에서 중요한데, 예를 들어, 의료 영상에서 단순히 환자가 폐암인지, 결핵인지만을 알려주는 것이 아니라, X-ray 사진에서 이 부분 때문에 문제가 있다고 알려줘야 정확한 확인이 가능하기 때문이다.
   (2) 또한 CNN을 debugging하는 입장에서, CNN이 왜 이런 결정을 내렸는지 알아볼 필요가 있을 때, 이미지의 어느 부분을 집중하고 보고 있는지 확인하고 싶을 때 사용할 수 있다.

2. Weight Decay
   가중치 감쇠(Weight decay)는 가중치(weight)에 계수를 곱해서 그 값이 크게 발산하는 것을 방지해 최적화가 안정적으로 진행되게 하는 방법이다. 과적합(Overfitting)은 가중치 값이 커서 발생하는 경우가 많기 때문에, 가중치가 클수록 큰 페널티를 부과하여 과적합을 억제하는 방법이다. 즉, weight의 감쇠(decay)를 통해 모델의 복잡도(Complexity)를 의도적으로 감소시킴으로써 과적합(Overfitting)을 방지하는 일반화(Regularization) 기법이다.

3. Whitening
   Covariate Shift를 줄이는 naive한 방법으로, 각 layer로 들어가는 입력을 평균 0(zero mean), 분산 1(unit variance)을 가지는 정규분포(normal distribution)로 정규화(normalize)하는 방법이다. 하지만 Whitening의 두 가지 문제점을 보이며, 이를 해결하기 위한 방법으로 Batch Normalization을 제시한다.
   (1) 다변량정규분포(multi variate normal distribution)로 normalize를 하려면 역(inverse)의 제곱근(square root)을 계산해야하기 때문에 필요한 계산량이 많아진다.
   (2) mean/variance 또한, 전체 데이터를 기준으로 training마다 계산해야하기 때문에 계산량이 많아진다.
