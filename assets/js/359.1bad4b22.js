(window.webpackJsonp=window.webpackJsonp||[]).push([[359],{850:function(t,v,_){"use strict";_.r(v);var s=_(14),a=Object(s.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"计算机网络"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#计算机网络"}},[t._v("#")]),t._v(" 计算机网络")]),t._v(" "),_("div",{staticClass:"custom-block tip"},[_("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),_("p",[t._v("计算机网络、计算机操作系统这两个“兄弟”是所有开发岗位都需要“结拜”的，不管你是 Java、C++还是测试。对于后端开发的童鞋来说，计算机网络的重要性不亚于语言基础，毕竟平时开发经常会和网络打交道，比如：抓个包等等。所以对这一块知识点的准备还是要抱着敬畏之心，不要放过任何一个漏网之题。")])]),t._v(" "),_("p",[_("strong",[t._v("学习途径")])]),t._v(" "),_("ol",[_("li",[_("p",[t._v("看书：对于计算机比较基础的模块，我都是比较推荐找一本经典的书籍来好好学习下，不可以只看面经就去面试了。我一共看了两本书：汤小丹的《计算机操作系统》和《图解HTTP》。《计算机操作系统》是教科书，所以知识点相对比较基础，覆盖范围也比较广，非科班的学生还是很有必要看一看的。《图解HTTP》这本书用很多插图将一些知识点讲的通俗易懂，看起来也很快，还是比较推荐的。")])]),t._v(" "),_("li",[_("p",[t._v("做笔记：计算机网络的知识点还是比较多的，需要看书的时候做好笔记，方便复习。而且做笔记的时候可以就这个知识点去百度下，看看有没有自己遗漏的点，再给补充进来。在这里说下，我为什么一直强调做笔记？好处 1：做笔记是第 1 次你对书中的知识点的回顾，加深记忆；好处 2：而且如果你是发表在公关社区的肯定要保证最大限度的正确性，就需要再去看看这个知识点，核对下自己是否有理解偏差和遗漏等，这样就完成了知识点的深挖；好处3：正在到面试复习的时候，你是不太可能重新看一本书的，那么笔记就显得很重要了，自己做的笔记，复习起来很快，而且最好在笔记里能有一些自己区别于面经的理解。")])]),t._v(" "),_("li",[_("p",[t._v("看面经：经常刷一刷牛客，看看对于计算机网络，面试官们都是怎么问的？很多问题你可能会，但是不懂面试官的问法，也会回答不上来；问到的题目自己是否准备了？而且对于计算机网络和计算机操作系统会因为公司和岗位的不同而有所侧重的，多看看面经就会发现还是有一点规律的，但是这都不是绝对的，最后还要看面你的面试官的喜好。")])])]),t._v(" "),_("img",{attrs:{src:t.$withBase("/network.jpg"),alt:"mixureSecure"}}),t._v(" "),_("p",[_("strong",[t._v("五层网络协议体系结构")])]),t._v(" "),_("p",[t._v("学习计算机网络时我们一般采用折中的办法，也就是中和 OSI 和 TCP/IP 的优点，采用一种只有五层协议的体系结构，这样既简洁又能将概念阐述清楚。")]),t._v(" "),_("p",[_("strong",[t._v("1.应用层")])]),t._v(" "),_("p",[t._v("应用层（application-layer）的任务是通过应用进程间的交互来完成特定网络应用。应用层协议定义的是应用进程（进程：主机中正在运行的程序）间的通信和交互的规则。对于不同的网络应用需要不同的应用层协议。在互联网中应用层协议很多，如域名系统 DNS，支持万维网应用的 HTTP 协议，支持电子邮件的 SMTP 协议等等。我们把应用层交互的数据单元称为报文。")]),t._v(" "),_("p",[_("strong",[t._v("2.运输层")])]),t._v(" "),_("p",[t._v("运输层（transport layer）的主要任务就是负责向两台主机进程之间的通信提供通用的数据传输服务。应用进程利用该服务传送应用层报文。“通用的”是指并不针对某一个特定的网络应用，而是多种应用可以使用同一个运输层服务。")]),t._v(" "),_("p",[t._v("由于一台主机可同时运行多个线程，因此运输层有复用和分用的功能。所谓复用就是指多个应用层进程可同时使用下面运输层的服务，分用和复用相反，是运输层把收到的信息分别交付上面应用层中的相应进程。")]),t._v(" "),_("p",[_("strong",[t._v("3.网络层")])]),t._v(" "),_("p",[t._v("在计算机网络中进行通信的两个计算机之间可能会经过很多个数据链路，也可能还要经过很多通信子网。网络层的任务就是选择合适的网间路由和交换结点， 确保数据及时传送。在发送数据时，网络层把运输层产生的报文段或用户数据报封装成分组和包进行传送。在 TCP / IP 体系结构中，由于网络层使用 IP 协议，因此分组也叫 IP 数据报，简称数据报。")]),t._v(" "),_("p",[_("strong",[t._v("4.数据链路层")])]),t._v(" "),_("p",[t._v("数据链路层（data link layer）通常简称为链路层。两台主机之间的数据传输，总是在一段一段的链路上传送的，这就需要使用专门的链路层的协议。在两个相邻节点之间传送数据时，数据链路层将网络层交下来的 IP 数据报组装成帧，在两个相邻节点间的链路上传送帧。每一帧包括数据和必要的控制信息（如：同步信息，地址信息，差错控制等）。")]),t._v(" "),_("p",[t._v("在接收数据时，控制信息使接收端能够知道一个帧从哪个比特开始和到哪个比特结束。这样，数据链路层在收到一个帧后，就可从中提出数据部分，上交给网络层。控制信息还使接收端能够检测到所收到的帧中有无差错。如果发现差错，数据链路层就简单地丢弃这个出了差错的帧，以避免继续在网络中传送下去白白浪费网络资源。如果需要改正数据在链路层传输时出现差错（这就是说，数据链路层不仅要检错，而且还要纠错），那么就要采用可靠性传输协议来纠正出现的差错。这种方法会使链路层的协议复杂些。")]),t._v(" "),_("p",[_("strong",[t._v("5.物理层")])]),t._v(" "),_("p",[t._v("在物理层上所传送的数据单位是比特。物理层（physical layer）的作用是实现相邻计算机节点之间比特流的透明传送，尽可能屏蔽掉具体传输介质和物理设备的差异。使其上面的数据链路层不必考虑网络的具体传输介质是什么。“透明传送比特流”表示经实际电路传送后的比特流没有发生变化，对传送的比特流来说，这个电路好像是看不见的。")])])}),[],!1,null,null,null);v.default=a.exports}}]);