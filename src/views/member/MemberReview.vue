<template>
    <div class="all-info">
        <div class="first-div"></div>
        <div class="all-info-all"  >
            <div class="headers">
                <img class="logoimg" src="../../assets/img/login/memberlogo.png" >
                <h2>中国联通5G应用创新联盟</h2>
                <h1>联系我们：hqs-cu5gaia@chinaunicom.cn</h1>
            </div>
            <div class="header-title">
                <h3>中国联通5G应用创新联盟入会申请</h3>
            </div>
            <div class="icon-back icon-back1">
                <Icon  type="md-create" size="24" color="#FFFFFF"/>
            </div>
            <div class="steps steps1">
            </div>
            <div class="steps steps1-1">
            </div>

            <div class="icon-back icon-back2">
                <Icon  type="md-create" size="24" color="#FFFFFF"/>
            </div>
            <div class="steps steps2">
            </div>
            <div class="steps steps2-1">
            </div>
            <div class="icon-back icon-back3" >
                <Icon  type="md-create"  size="24" color="#FFFFFF"/>
            </div>
            <div class="steps steps3">
            </div>
            <div class="steps steps3-1">
            </div>
            <div class="icon-back icon-back4" >
                <Icon  type="md-create" size="24" color="#FFFFFF"/>
            </div>
            <div class="steps steps4">
            </div>
            <div class="steps steps4-1">
            </div>
            <div class="icon-back icon-back5">
                <Icon  type="md-create" size="24" color="#FFFFFF"/>
            </div>
            <div class="steps steps5">
            </div>
            <div class="steps steps5-1">
            </div>
            <div class="icon-back icon-back6" >
                <Icon  type="md-checkbox-outline" size="24" color="#FFFFFF"/>
            </div>

            <Form ref="vipInfo" :model="vipInfo" :rules="ruleInline" inline>

                <div class="info">
                    <Row class="row-type row-type1">
                        <Col span="4"><span class="text-name">单位名称（中文）</span><span class="red-require">*</span></Col>
                        <Col span="8"><FormItem prop="chineseName"><Input size="large" v-bind:readonly="isreadonly"  class="input-width"  placeholder="请输入单位名称"  v-model="vipInfo.chineseName"  /> </FormItem></Col>
                        <Col span="4"><span class="text-name">单位名称（英文）</span><span class="red-require">*</span></Col>
                        <Col span="8"><FormItem prop="englishName"><Input size="large"  v-bind:readonly="isreadonly" class="input-width"  placeholder="请输入单位名称" v-model="vipInfo.englishName"/> </FormItem></Col>
                    </Row>
                    <Row class="row-type">
                        <Col span="4"><span class="text-name">单位地址</span><span class="red-require">*</span></Col>
                        <Col span="20"><FormItem prop="address"><Input size="large" v-bind:readonly="isreadonly" style="width: 766px" placeholder="请输入单位地址" v-model="vipInfo.address"/> </FormItem></Col>
                    </Row>
                    <Row class="row-type">
                        <Col span="4"><span class="text-name">联系人</span><span class="red-require">*</span></Col>
                        <Col span="8"><FormItem prop="contact"><Input size="large" v-bind:readonly="isreadonly" class="input-width" placeholder="请输入联系人" v-model="vipInfo.contact"/></FormItem></Col>
                        <Col span="4"><span class="text-name">职务</span><span class="red-require">*</span></Col>
                        <Col span="8"><FormItem prop="position"><Input size="large"  v-bind:readonly="isreadonly" class="input-width" placeholder="请输入职务" v-model="vipInfo.position"/></FormItem></Col>
                    </Row>
                    <Row class="row-type">
                        <Col span="4"><span class="text-name">电话</span><span class="red-require">*</span></Col>
                        <Col span="8"><FormItem prop="phone"><Input size="large" v-bind:readonly="isreadonly" class="input-width" placeholder="请输入电话" v-model="vipInfo.phone"/></FormItem></Col>
                        <Col span="4"><span class="text-name">单位网址</span><span class="red-require">*</span></Col>
                        <Col span="8"><FormItem prop="website"><Input size="large" v-bind:readonly="isreadonly" class="input-width" placeholder="请输入单位网址" v-model="vipInfo.website"/></FormItem></Col>
                    </Row>
                    <Row class="row-type">
                        <Col span="4"><span class="text-name">联系人邮箱</span><span class="red-require">*</span></Col>
                        <Col span="8"><FormItem prop="email"><Input size="large" v-bind:readonly="isreadonly" class="input-width" placeholder="请输入联系人邮箱" v-model="vipInfo.email"/></FormItem></Col>
                        <Col span="4"><span class="text-name">联系人微信号</span><span class="red-require">*</span></Col>
                        <Col span="8"><FormItem prop="wechat"><Input size="large"  v-bind:readonly="isreadonly" class="input-width" placeholder="请输入联系人微信号" v-model="vipInfo.wechat"/></FormItem></Col>
                    </Row>
                    <Row class="row-type-2">
                        <Col span="4"><span class="text-name">所属行业</span><span class="red-require">*</span></Col>
                        <Col span="20">
                            <RadioGroup v-model="vipInfo.industry" >
                                <Radio label="新媒体" v-bind:disabled="isreadonly"><span class="text-name">新媒体</span></Radio>
                                <Radio label="工业互联网" v-bind:disabled="isreadonly"><span class="text-name">工业互联网</span></Radio>
                                <Radio label="智慧交通" v-bind:disabled="isreadonly"><span class="text-name">智慧交通</span></Radio>
                                <Radio label="智慧城市" v-bind:disabled="isreadonly"><span class="text-name">智慧城市</span></Radio>
                                <Radio label="智慧医疗" v-bind:disabled="isreadonly"><span class="text-name">智慧医疗</span></Radio>
                                <Radio label="公共安全" v-bind:disabled="isreadonly"><span class="text-name">公共安全</span></Radio>
                                <Radio label="泛在低空" v-bind:disabled="isreadonly"><span class="text-name">泛在低空</span></Radio>
                                <Radio label="智慧体育" v-bind:disabled="isreadonly"><span class="text-name">智慧体育</span></Radio>
                                <Radio label="智慧教育" v-bind:disabled="isreadonly"><span class="text-name">智慧教育</span></Radio>
                                <Radio label="文旅" v-bind:disabled="isreadonly"><span class="text-name">文旅</span></Radio>
                                <Radio label="智慧能源" v-bind:disabled="isreadonly"><span class="text-name">智慧能源</span></Radio>
                                <Radio label="金融" v-bind:disabled="isreadonly"><span class="text-name">金融</span></Radio>
                                <Radio label="政务" v-bind:disabled="isreadonly"><span class="text-name">政务</span></Radio>
                                <Radio label="其他" v-bind:disabled="isreadonly"><span class="text-name">其他</span></Radio>
                            </RadioGroup>
                        </Col>
                    </Row>
                    <Row class="row-type">
                        <Col span="4"><span class="text-name">其他</span></Col>
                        <Col span="20"><Input size="large" v-bind:readonly="isreadonly" style="width:775px" class=" input-type-other" placeholder="请输入其他行业" v-model="vipInfo.industryother"/></Col>
                    </Row>

                    <Row class="row-type-2">
                        <Col span="4"><span class="text-name">所属产业链</span><span class="red-require">*</span></Col>
                        <Col span="20">
                            <RadioGroup v-model="vipInfo.industryChain">
                                <Radio label="芯片&卡片模组" v-bind:disabled="isreadonly"><span class="text-name">芯片&卡片模组</span></Radio>
                                <Radio label="行业终端" v-bind:disabled="isreadonly"><span class="text-name">行业终端</span></Radio>
                                <Radio label="设备商" v-bind:disabled="isreadonly"><span class="text-name">设备商</span></Radio>
                                <Radio label="垂直行业应用" v-bind:disabled="isreadonly"><span class="text-name">垂直行业应用</span></Radio>
                                <Radio label="系统集成&咨询" v-bind:disabled="isreadonly"><span class="text-name">系统集成&咨询</span></Radio>
                                <Radio label="平台" v-bind:disabled="isreadonly"><span class="text-name">平台</span></Radio>
                                <Radio label="运营" v-bind:disabled="isreadonly"><span class="text-name">运营</span></Radio>
                                <Radio label="软件开发" v-bind:disabled="isreadonly"><span class="text-name">软件开发</span></Radio>
                                <Radio label="客户" v-bind:disabled="isreadonly"><span class="text-name">客户</span></Radio>
                            </RadioGroup></Col>
                    </Row>

                    <Row class="row-type">
                        <Col span="4"><span class="text-name">申请会籍</span><span class="red-require">*</span></Col>
                        <Col span="20">
                            <FormItem prop="membership">
                                <RadioGroup v-model="vipInfo.membership">
                                    <Radio label="理事单位" v-bind:disabled="isreadonly"><span class="text-name">理事单位</span></Radio>
                                    <Radio label="会员" v-bind:disabled="isreadonly"><span class="text-name">会员</span></Radio>
                                </RadioGroup></FormItem>

                        </Col>
                    </Row>

                </div>
                <div class="base-info">
                    <h4>基本信息</h4>
                    <Row  class="row-type row-type1">
                        <Col span="4"><span class="text-name">成立时间</span><span class="red-require">*</span></Col>
                        <Col span="8"> <DatePicker v-bind:readonly="isreadonly" class="input-width" size="large" type="date" placeholder="请选择成立时间"  v-model="vipInfo.establishedDate"></DatePicker></Col>
                        <Col span="4"><span class="text-name">企业性质</span><span class="red-require">*</span></Col>
                        <Col span="8"><FormItem prop="businessNature"><Input v-bind:readonly="isreadonly" size="large"  class="input-width" placeholder="请输入企业性质" v-model="vipInfo.businessNature"/></FormItem></Col>
                    </Row>
                    <Row  class="row-type">
                        <Col span="4"><span class="text-name">注册资金</span><span class="red-require">*</span></Col>
                        <Col span="8"><FormItem prop="registeredCapital"><Input v-bind:readonly="isreadonly" size="large" class="input-width" placeholder="请输入注册资金" v-model="vipInfo.registeredCapital"/></FormItem></Col>
                        <Col span="4"><span class="text-name">员工数</span><span class="red-require">*</span></Col>
                        <Col span="8"><FormItem prop="employeeCount"><Input v-bind:readonly="isreadonly" size="large" class="input-width" placeholder="请输入员工数" v-model="vipInfo.employeeCount"/></FormItem></Col>
                    </Row>
                    <Row  class="row-type">
                        <Col span="4"><span class="text-name">上年度营业额</span><span class="red-require">*</span></Col>
                        <Col span="20"><FormItem prop="turnover">
                            <RadioGroup v-model="vipInfo.turnover" >
                                <Radio label="百万级" v-bind:disabled="isreadonly"><span class="text-name">百万级</span></Radio>
                                <Radio label="千万级" v-bind:disabled="isreadonly"><span class="text-name">千万级</span></Radio>
                                <Radio label="亿级" v-bind:disabled="isreadonly"><span class="text-name">亿级</span></Radio>
                                <Radio label="十亿级及以上" v-bind:disabled="isreadonly"><span class="text-name">十亿级及以上</span></Radio>
                            </RadioGroup></FormItem>

                        </Col>
                    </Row>

                    <Row class="row-type-2">
                        <Col span="4"><span class="text-name1">公司行业地位/主要业务及市场拓展情况
                        </span><span class="red-require">*</span></Col>
                        <Col span="16"><Input size="large" v-bind:readonly="isreadonly" class=" input-type-2" type="textarea" placeholder="" v-model="vipInfo.mainBusiness" :autosize="{minRows: 3,maxRows: 3}"/></Col>

                    </Row>
                    <Row class="row-type-2">
                        <Col span="4"><span class="text-name1">
                            与联通的合作开展情况
                        </span><span class="red-require">*</span></Col>
                        <Col span="16"><Input size="large"  v-bind:readonly="isreadonly" class=" input-type-2" type="textarea" placeholder="" v-model="vipInfo.toUnicom" :autosize="{minRows: 3,maxRows: 3}"/></Col>

                    </Row>

                </div>
            </Form>
            <div class="company-info">
                <h4>推荐单位信息</h4>
                <Row  class="row-type row-type1">
                    <Col span="4"><span class="text-name">推荐单位名称</span><span class="red-require">*</span></Col>
                    <Col span="8"><Input size="large" v-bind:readonly="isreadonly" class="input-width" placeholder="请输入推荐单位名称" v-model="vipInfo.recommendCompany"/></Col>
                    <Col span="4"><span class="text-name">推荐人</span><span class="red-require">*</span></Col>
                    <Col span="8"><Input size="large"  v-bind:readonly="isreadonly" class="input-width" placeholder="请输入推荐人" v-model="vipInfo.referrer"/></Col>
                </Row>
                <Row class="row-type">
                    <Col span="4"><span class="text-name">推荐人电话</span><span class="red-require">*</span></Col>
                    <Col span="8"><Input size="large" v-bind:readonly="isreadonly" class="input-width" placeholder="请输入推荐人电话" v-model="vipInfo.referrerPhone"/></Col>

                </Row>

            </div>
            <div class="credit-info">
                <h4>信用信息</h4>
                <table contentEditable="false" class="table-base" border="1" cellspacing="0">
                    <tr>
                        <th></th>
                        <th>评价单位</th><th>评价时间</th><th>评价信息</th>
                    </tr>
                    <tr>
                        <th>质检情况</th>
                        <td ><input v-bind:readonly="isreadonly" class="table-input" v-model="vipCredit[0].companyName" ></td>
                        <td ><input v-bind:readonly="isreadonly" class="table-input" v-model="vipCredit[0].evaluationDate"></td>
                        <td ><input v-bind:readonly="isreadonly" class="table-input" v-model="vipCredit[0].evaluationDesc"></td>
                    </tr>
                    <tr>
                        <th>纳税信用等级</th>
                        <td ><input v-bind:readonly="isreadonly" class="table-input" v-model="vipCredit[1].companyName"></td>
                        <td ><input v-bind:readonly="isreadonly" class="table-input" v-model="vipCredit[1].evaluationDate"></td>
                        <td ><input v-bind:readonly="isreadonly" class="table-input" v-model="vipCredit[1].evaluationDesc"></td>
                    </tr>
                    <tr>
                        <th>贷款信用等级</th>
                        <td ><input v-bind:readonly="isreadonly" class="table-input" v-model="vipCredit[2].companyName"></td>
                        <td ><input v-bind:readonly="isreadonly" class="table-input" v-model="vipCredit[2].evaluationDate"></td>
                        <td ><input v-bind:readonly="isreadonly" class="table-input" v-model="vipCredit[2].evaluationDesc"></td>
                    </tr><tr>
                    <th>守合同重信用称号</th>
                    <td ><input v-bind:readonly="isreadonly" class="table-input" v-model="vipCredit[3].companyName"></td>
                    <td ><input v-bind:readonly="isreadonly" class="table-input" v-model="vipCredit[3].evaluationDate"></td>
                    <td ><input v-bind:readonly="isreadonly" class="table-input" v-model="vipCredit[3].evaluationDesc"></td>
                </tr>
                </table>
                <Row class="row-type-sxxw">
                    <Col span="12"><span class="text-name2">行政处罚失信行为（如有处罚请填写下列内容）</span>
                        <span class="red-require">*</span></Col>
                </Row>
                <Row class="row-type-yxxw">
                    <Col span="6"><span class="text-name">去年是否有下列行为</span><span class="red-require">*</span></Col>
                    <Col span="6"><RadioGroup  v-model="vipInfo.punishStatus">
                        <Radio label="1" v-bind:disabled="isreadonly"><span class="text-name">是</span></Radio>
                        <Radio label="0" v-bind:disabled="isreadonly"><span class="text-name">否</span></Radio>
                    </RadioGroup></Col>
                </Row>
                <table contentEditable="false" class="table-base-cf" border="1" cellspacing="0">
                    <tr>
                        <th></th>
                        <th>处罚机构</th><th>时间</th><th>处罚内容</th>
                    </tr>
                    <tr>
                        <th style="padding-left: 15px">
                            受到工商行政部门及其他政府部门的处罚
                        </th>
                        <td><input v-bind:readonly="isreadonly" class="table-input"  v-model="vipPunish[0].mechanismName" ></td>
                        <td><input v-bind:readonly="isreadonly" class="table-input"  v-model="vipPunish[0].punishDate" ></td>
                        <td><input v-bind:readonly="isreadonly" class="table-input"  v-model="vipPunish[0].punishDesc"></td>
                    </tr>
                    <tr>
                        <th >工商年检等级降低</th>
                        <td><input v-bind:readonly="isreadonly" class="table-input"  v-model="vipPunish[1].mechanismName"></td>
                        <td><input v-bind:readonly="isreadonly" class="table-input"  v-model="vipPunish[1].punishDate" ></td>
                        <td><input v-bind:readonly="isreadonly" class="table-input"  v-model="vipPunish[1].punishDesc"></td>
                    </tr>
                    <tr>
                        <th style="padding-left: 15px">资质等级下降或认证取消</th>
                        <td><input v-bind:readonly="isreadonly" class="table-input"  v-model="vipPunish[2].mechanismName"></td>
                        <td><input v-bind:readonly="isreadonly" class="table-input"  v-model="vipPunish[2].punishDate" ></td>
                        <td><input v-bind:readonly="isreadonly" class="table-input"  v-model="vipPunish[2].punishDesc"></td>
                    </tr><tr>
                    <th style="padding-left: 15px">
                        信贷等级下降或被列入金融“黑名单”
                    </th>

                    <td><input v-bind:readonly="isreadonly" class="table-input"  v-model="vipPunish[3].mechanismName"></td>
                    <td><input v-bind:readonly="isreadonly" class="table-input"  v-model="vipPunish[3].punishDate" ></td>
                    <td><input v-bind:readonly="isreadonly" class="table-input"  v-model="vipPunish[3].punishDesc"></td>
                </tr><tr>
                    <th style="padding-left: 15px">法人或高管信用不良记录
                    </th>
                    <td><input v-bind:readonly="isreadonly" class="table-input"  v-model="vipPunish[4].mechanismName"></td>
                    <td><input v-bind:readonly="isreadonly" class="table-input"  v-model="vipPunish[4].punishDate" ></td>
                    <td><input v-bind:readonly="isreadonly" class="table-input"  v-model="vipPunish[4].punishDesc"></td>
                </tr><tr>
                    <th>
                        重大败诉案件
                    </th>
                    <td><input v-bind:readonly="isreadonly" class="table-input"  v-model="vipPunish[5].mechanismName"></td>
                    <td><input v-bind:readonly="isreadonly" class="table-input"  v-model="vipPunish[5].punishDate" ></td>
                    <td><input v-bind:readonly="isreadonly" class="table-input"  v-model="vipPunish[5].punishDesc"></td>
                </tr>
                </table>

            </div>
            <div class="society-info">
                <h4>社会影响</h4>
                <table contentEditable="false" class="table-base" border="1" cellspacing="0">
                    <tr>
                        <th rowspan="5">现任管理者荣誉奖励</th>
                        <th>姓名</th><th>职务</th><th>所获荣誉及称号</th>
                    </tr>
                    <tr>

                        <td><input v-bind:readonly="isreadonly" class="table-input"  v-model="vipHonor[0].managementName"></td>
                        <td><input v-bind:readonly="isreadonly" class="table-input"  v-model="vipHonor[0].managementPosition"></td>
                        <td><input v-bind:readonly="isreadonly" class="table-input"  v-model="vipHonor[0].honorDesc"></td>
                    </tr>
                    <tr>
                        <td><input v-bind:readonly="isreadonly" class="table-input"  v-model="vipHonor[1].managementName"></td>
                        <td><input v-bind:readonly="isreadonly" class="table-input"  v-model="vipHonor[1].managementPosition"></td>
                        <td><input v-bind:readonly="isreadonly" class="table-input"  v-model="vipHonor[1].honorDesc"></td>
                    </tr>
                    <tr>
                        <td><input v-bind:readonly="isreadonly" class="table-input"  v-model="vipHonor[2].managementName"></td>
                        <td><input v-bind:readonly="isreadonly" class="table-input"  v-model="vipHonor[2].managementPosition"></td>
                        <td><input v-bind:readonly="isreadonly" class="table-input"  v-model="vipHonor[2].honorDesc"></td>
                    </tr><tr>
                    <td><input v-bind:readonly="isreadonly" class="table-input"  v-model="vipHonor[3].managementName"></td>
                    <td><input v-bind:readonly="isreadonly" class="table-input"  v-model="vipHonor[3].managementPosition"></td>
                    <td><input v-bind:readonly="isreadonly" class="table-input"  v-model="vipHonor[3].honorDesc"></td>
                </tr>
                </table>


                <table contentEditable="false" class="table-base" border="1" cellspacing="0">
                    <tr>
                        <th rowspan="5">社会公益事业贡献情况</th>
                        <th>内容</th><th>时间</th>
                    </tr>
                    <tr>

                        <td><input v-bind:readonly="isreadonly" class="table-input1"  v-model="vipContribution[0].contributionDesc"></td>
                        <td><input v-bind:readonly="isreadonly" class="table-input"  v-model="vipContribution[0].contributionDate"></td>
                    </tr>
                    <tr>
                        <td><input v-bind:readonly="isreadonly" class="table-input1"  v-model="vipContribution[1].contributionDesc"></td>
                        <td><input v-bind:readonly="isreadonly" class="table-input"  v-model="vipContribution[1].contributionDate"></td>
                    </tr>
                    <tr>
                        <td><input v-bind:readonly="isreadonly" class="table-input1"  v-model="vipContribution[2].contributionDesc"></td>
                        <td><input v-bind:readonly="isreadonly" class="table-input"  v-model="vipContribution[2].contributionDate"></td>
                    </tr>
                    <tr>
                        <td><input v-bind:readonly="isreadonly" class="table-input1"  v-model="vipContribution[3].contributionDesc"></td>
                        <td><input v-bind:readonly="isreadonly" class="table-input"  v-model="vipContribution[3].contributionDate"></td>

                    </tr>
                </table>

            </div>

            <div class="review-info" v-if="showReviewInfo">
                <Row class="row-type-2 row-type-Review">
                    <Col span="4"><span class="text-name1">审核意见
                        </span></Col>
                    <Col span="16"><Input size="large" v-bind:readonly="isreadonly1" class=" input-type-2" type="textarea" placeholder="" v-model="vipInfo.approvalContent" :autosize="{minRows: 3,maxRows: 3}"/></Col>
                </Row>
            </div>

            <div v-if="showReview">
                <div  class="reviewstatusf" v-on:click="reviewstatus('2')"   v-bind:disabled = "isDisabled">审核失败
                </div>
                <div  class="reviewstatuss" v-on:click="reviewstatus('1')"  v-bind:disabled = "isDisabled">审核通过
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        name: "MemberReview",
        data(){

            return{
                isDisabled:false,
                timer:null,
                isreadonly:true,
                showReview:true,
                showReviewInfo:true,
                isreadonly1:false,


                ruleInline: {
                },
                vipInfo: {
                    chineseName:'',
                    englishName:'',
                    address:'',
                    contact:'',
                    position:'',
                    phone:'',
                    website:'',
                    email:'',
                    wechat:'',
                    industry:'',
                    industryChain:'',
                    membership:'',
                    establishedDate:'',
                    businessNature:'',
                    registeredCapital:'',
                    employeeCount:'',
                    turnover:'',
                    mainBusiness:'',
                    toUnicom:'',
                    referrer:'',
                    referrerPhone:'',
                    recommendCompany:'',
                    punishStatus:'',
                    approvalContent:'',
                    logo:null,
                    id: '',
                    approvalState:'',
                    userId: 1,
                    industryother:'',
                },
                vipHonor: [
                    {
                        managementName: '',
                        managementPosition:'',
                        honorDesc:'',
                        infoId: 1,
                        id: 1
                    },
                    {
                        managementName: '',
                        managementPosition:'',
                        honorDesc:'',
                        infoId: 1,
                        id: 1
                    },{
                        managementName: '',
                        managementPosition:'',
                        honorDesc:'',
                        infoId: 1,
                        id: 1
                    },{
                        managementName: '',
                        managementPosition:'',
                        honorDesc:'',
                        infoId: 1,
                        id: 1
                    }
                ],
                vipPunish: [
                    {
                        punishDesc: '',
                        mechanismName: '',
                        infoId: 1,
                        punishType: 1,
                        id: 1,
                        punishDate: ''
                    },
                    {
                        punishDesc: '',
                        mechanismName: '',
                        infoId: 1,
                        punishType: 2,
                        id: 2,
                        punishDate: ''

                    },
                    {
                        punishDesc: '',
                        mechanismName: '',
                        infoId: 1,
                        punishType: 3,
                        id: 3,
                        punishDate: ''
                    },
                    {
                        punishDesc: '',
                        mechanismName: '',
                        infoId: 1,
                        punishType: 4,
                        id: 4,
                        punishDate: ''
                    },
                    {
                        punishDesc: '',
                        mechanismName: '',
                        infoId: 1,
                        punishType: 5,
                        id: 5,
                        punishDate: ''

                    },
                    {
                        punishDesc: '',
                        mechanismName: '',
                        infoId: 1,
                        punishType: 6,
                        id: 6,
                        punishDate: ''

                    }
                ],
                vipCredit: [
                    {
                        evaluationType: 1,
                        evaluationDate: '',
                        companyName: '',
                        evaluationDesc: '',
                        infoId: 1,
                        id: 1
                    },
                    {
                        evaluationType: 2,
                        evaluationDate: '',
                        companyName: '',
                        evaluationDesc: '',
                        infoId: 1,
                        id: 2
                    },
                    {
                        evaluationType: 3,
                        evaluationDate: '',
                        companyName: '',
                        evaluationDesc: '',
                        infoId: 1,
                        id: 3
                    },
                    {
                        evaluationType: 4,
                        evaluationDate: '',
                        companyName: '',
                        evaluationDesc: '',
                        infoId: 1,
                        id: 4
                    }
                ],
                vipContribution: [
                    {
                        contributionDesc: '',
                        infoId: 1,
                        id: 1,
                        contributionDate: ''
                    },
                    {
                        contributionDesc: '',
                        infoId: 1,
                        id: 2,
                        contributionDate: ''
                    },
                    {
                        contributionDesc: '',
                        infoId: 1,
                        id: 3,
                        contributionDate: ''
                    },
                    {
                        contributionDesc: '',
                        infoId: 1,
                        id: 4,
                        contributionDate: ''
                    }
                ]
            }
        },
        mounted () {
            var that= this
            //console.log(this.$store.state)
            //console.log(this.$store.state)
            var usertag=this.$store.state.user.data.role


            this.$request(
                    {
                        method:'get',
                        url:'/vip/vipInfo/get',
                        //headers: {'X-Requested-With': 'XMLHttpRequest','Authorization':'X613109921624231936'},
                        params: {
                            userId: this.$route.query.approvalId+''
                        },
                    }
                ).then(function(response)
                {
                    //console.log(response.data.data.vipInfo.approvalState)
                    if(response.data.data.vipInfo.approvalState==="1"||response.data.data.vipInfo.approvalState==="2")
                    {
                        //console.log(response)

                        //console.log("0000")
                        that.isDisabled=true,
                            that.isreadonly=true,
                            that.showReview=true,
                            that.showReviewInfo=true,
                            that.isreadonly1=true
                    }else if(response.data.data.vipInfo.approvalState==="0"){
                        //console.log(response)
                        //console.log("1111")
                        that.isreadonly=true,
                            that.showReview=true,
                            that.showReviewInfo=true
                    }
                    else{}
                    that.vipInfo=response.data.data.vipInfo;
                 if(response.data.data.vipInfo.approvalState==="0"){
                     that.vipInfo.approvalContent='';
                }
                    //Todo所属行业其他的时候再此处判断
                    if(that.vipInfo.industry.indexOf("其他") != -1){
                        var strs1= new Array();
                        strs1 = that.vipInfo.industry.split(".")
                        that.vipInfo.industry= strs1[0];
                        that.vipInfo.industryother= strs1[1];
                    }
                    //console.log(response.data.data.vipHonor.length)
                    //console.log(response.data.data.vipHonor[0])
                    for(var i=0;i<response.data.data.vipHonor.length;i++){
                        that.vipHonor[i]=response.data.data.vipHonor[i];
                    }
                    for(var i=0;i<response.data.data.vipContribution.length;i++){
                        that.vipContribution[i]=response.data.data.vipContribution[i];
                    }
                    for(var i=0;i<response.data.data.vipCredit.length;i++){
                        that.vipCredit[i]=response.data.data.vipCredit[i];
                    }
                    for(var i=0;i<response.data.data.vipPunish.length;i++){
                        that.vipPunish[i]=response.data.data.vipPunish[i];
                    }
                    //console.log(response);
                    //console.log(response.data.data.vipInfo.englishName);
                })
                    .catch(function (error) { // 请求失败处理
                        console.log(error);
                    });


        },
        methods:{

            success (title,info) {
                this.$Notice.success({
                    title: title,
                    desc:info
                });
            },
            error (title,desc) {
                this.$Notice.error({
                    title: title,
                    desc: desc
                });
            },
            reviewstatus(sta){
                var that=this;
                var sta=sta;
                if (sta==='1'){
                    this.vipInfo.approvalContent="审核通过";
                }
                console.log(this.$store.state.user.data.id)
                this.$request(
                    {
                        method:'post',
                        url:'/vip/vipInfo/updateApproval',
                        //headers: {'X-Requested-With': 'XMLHttpRequest','Authorization':'X613109921624231936'},
                        data: {
                            "approvalState":sta,
                            "targetUserId":this.$route.query.approvalId+'',
                            "approvalContent":this.vipInfo.approvalContent
                        },
                    }
                ).then(function(response)
                {
                    //console.log(response)
                    if(response.status === 200 && response.data.status===200 )
                    {
                        that.success('提交成功','');
                        that.isDisabled=true;
                        that.isreadonly=true;
                        that.showReview=true,
                        that.showReviewInfo=true,
                        that.isreadonly1=true
                        setTimeout(()=>{
                            window.opener=null;
                            window.close()
                        },3000);

                    }else{
                        that.error('提交失败','');
                    }

                    //console.log(response.data.data.vipHonor.length)
                    //console.log(response.data.data.vipHonor[0])

                })
                    .catch(function (error) { // 请求失败处理
                        console.log(error);
                    });

            }

        },
        beforeDestroy() {
            clearInterval(this.timer);
        },
        beforeCreate() {
            debugger
            if(window.opener == null) {
                this.$router.push('/home');
            }
        }
    }
</script>
<style>
    .all-info .ivu-input-large {
        font-size: 14px;
        padding: 6px 7px;
        height: 42px;
    }
    .all-info .ivu-radio {
        display: inline-block;
        margin-right: 4px;
        margin-top: 15px;
        white-space: nowrap;
        position: relative;
        line-height: 1;
        vertical-align: middle;
        cursor: pointer;
    }
    .textarea .ivu-input {
        max-width: 100%;
        height: auto;
        min-height: 84px;
        vertical-align: bottom;
        font-size: 14px;
    }

</style>


<style scoped>

    .first-div{
        width:100%;
        height:130px;
        background:rgba(27,112,228,1);

    }
    .all-info{
        width:100%;
        height:3445px;
        position: relative;
        margin: auto;
        background:rgba(243,243,243,1);
    }
    .all-info-all{
        width:1366px;
        height:3378px;
        margin:0 auto;
        margin-top: -130px;
        position: relative;
        background:rgba(243,243,243,1);

    }
    .logoimg{
        width:68px;
        height:60px;
        position: absolute;
        margin:35px 1095px 0px 203px;
    }
    h2{
        width:289px;
        height:26px;
        font-size:24px;
        position: absolute;
        margin:51px 782px 0px 293px;
        font-family:SourceHanSansCN-Regular;
        font-weight:400;
        color:rgba(255,255,255,1);
        line-height:26px;
    }
    h1{
        width:291px;
        height:16px;
        font-size:15px;
        position: absolute;
        margin:57px 284px 0px 903px;
        font-family:SourceHanSansCN-Regular;
        font-weight:400;
        color:rgba(255,255,255,1);
        line-height:26px;
    }
    .steps{
        width:2px;
        background:rgba(27,112,228,1);
        float: left;
        position: absolute;
    }
    .steps1{
        height:335px;
        margin:287px 1168px 0px 174px;
    }
    .steps1-1{
        height:335px;
        margin:595px 1168px 0px 174px;

    }
    .steps2{
        height:255px;
        margin:970px 1168px 0px 174px;

    }
    .steps2-1{
        height:255px;
        margin:1220px 1168px 0px 174px;

    }
    .steps3{
        height:120px;
        margin:1500px 1168px 0px 174px;

    }
    .steps3-1{
        height:120px;
        margin:1620px 1168px 0px 174px;

    }
    .steps4{
        height:420px;
        margin:1770px 1168px 0px 174px;

    }
    .steps4-1{
        height:420px;
        margin:2190px 1168px 0px 174px;

    }
    .steps5{
        height:320px;
        margin:2640px 1168px 0px 174px;

    }
    .steps5-1{
        height:320px;
        margin:2960px 1168px 0px 174px;
    }



    .icon-back{
        width:48px;
        height:48px;
        padding: 12px;
        background:rgba(27,112,228,1);
        border-radius:50%;
        position: absolute;

    }
    .icon-back1{
        margin:245px 1170px 0px 151px;
    }
    .icon-back2{
        margin:930px 1170px 0px 151px;
    }
    .icon-back3{
        margin:1468px 1170px 0px 151px;
    }
    .icon-back4{
        margin:1736px 1170px 0px 151px;
    }
    .icon-back5{
        margin:2600px 1170px 0px 151px;
    }
    .icon-back6{
        margin:3258px 1170px 0px 151px;
    }

    .headers{
        width:100%;
        height:130px;
        position: absolute;
        margin:auto;
        background:rgba(27,112,228,1);
    }
    h3{
        width:407px;
        height:26px;
        font-size:26px;
        font-family:SourceHanSansCN-Regular;
        font-weight:bold;
        color:rgba(27,112,228,1);
        line-height:26px;
    }
    .header-title{
        width:407px;
        height:26px;
        font-size:26px;
        position: absolute;
        margin:179px 445px 0px 514px;
        font-family:SourceHanSansCN-Regular;
        font-weight:bold;
        color:rgba(27,112,228,1);
        line-height:26px;
    }
    .info{
        width:974px;
        height:655px;
        position: absolute;
        margin:245px 162px 0px 230px;
        background:rgba(255,255,255,1);
        box-shadow:0px 0px 20px 0px rgba(0, 0, 0, 0.03);
        border-radius:6px;
    }
    .base-info{
        width:974px;
        height:508px;
        position: absolute;
        margin:930px 162px 0px 230px;
        background:rgba(255,255,255,1);
        box-shadow:0px 0px 20px 0px rgba(0, 0, 0, 0.03);
        border-radius:6px;
    }
    .company-info{
        width:974px;
        height:238px;
        position: absolute;
        margin:1468px 162px 0px 230px;
        background:rgba(255,255,255,1);
        box-shadow:0px 0px 20px 0px rgba(0, 0, 0, 0.03);
        border-radius:6px;
    }
    .credit-info{
        width:974px;
        height:834px;
        position: absolute;
        margin:1736px 162px 0px 230px;
        background:rgba(255,255,255,1);
        box-shadow:0px 0px 20px 0px rgba(0, 0, 0, 0.03);
        border-radius:6px;
    }
    .society-info{
        width:974px;
        height:638px;
        position: absolute;
        margin:2600px 162px 0px 230px;
        background:rgba(255,255,255,1);
        box-shadow:0px 0px 20px 0px rgba(0, 0, 0, 0.03);
        border-radius:6px;
    }
    button{
        width:300px;
        height:50px;
        background:rgba(27,112,228,1);
        border-radius:4px;
    }
    .submitinfo{
        font-size:16px;
        position: absolute;
        margin:3258px 330px 0px 731px;
        font-weight:400;
        color:rgba(255,255,255,1);
        line-height:26px;
    }
    .saveinfo{
        font-size:16px;
        position: absolute;
        margin:3258px 665px 0px 401px;
        font-family:SourceHanSansCN-Regular;
        font-weight:400;
        color:rgba(255,255,255,1);
        line-height:26px;
    }
    .reviewstatusf{
        width:300px;
        height:50px;
        border-radius:4px;
        padding-top: 12px;
        text-align: center;
        background:linear-gradient(90deg,rgba(27,112,228,1),rgba(30,123,250,1));
        box-shadow:0px 4px 10px 0px rgba(27,112,228,0.5);
        font-family:SourceHanSansCN-Regular;
        font-size:16px;
        position: absolute;
        margin:3380px 330px 0px 731px;
        font-weight:400;
        color:rgba(255,255,255,1);
        line-height:26px;
    }
    .reviewstatuss{
        width:300px;
        height:50px;
        border-radius:4px;
        padding-top: 12px;
        text-align: center;
        background:linear-gradient(90deg,rgba(27,112,228,1),rgba(30,123,250,1));
        box-shadow:0px 4px 10px 0px rgba(27,112,228,0.5);
        font-size:16px;
        position: absolute;
        margin:3380px 665px 0px 401px;
        font-family:SourceHanSansCN-Regular;
        font-weight:400;
        color:rgba(255,255,255,1);
        line-height:26px;
    }
    .reviewstatusf:hover {
        cursor: pointer;
    }
    .reviewstatuss:hover {
        cursor: pointer;
    }


    .text-name{
        font-size:16px;
        float:right;
        padding: 10px;
        font-family:SourceHanSansCN-Regular;
        font-weight:400;
        color: rgb(102, 102, 102);
        line-height:26px;
    }
    .text-name1{
        width:128px;
        height:56px;
        float:right;
        padding: 5px;
        font-size:16px;
        font-family:SourceHanSansCN-Regular;
        font-weight:400;
        color: rgb(102, 102, 102);
        line-height:26px;
    }
    .text-name2{
        width:427px;
        height:19px;
        float:right;
        font-size:20px;
        font-family:SourceHanSansCN-Regular;
        font-weight:400;
        color:rgba(102,102,102,1);
        line-height:26px;
    }
    .red-require{
        float:right;
        margin-top: 14px;
        color:rgba(237,64,20,1);
    }
    .text-name{
        font-size:16px;
        float:right;
        font-family:SourceHanSansCN-Regular;
        font-weight:400;
        color: rgb(102, 102, 102);
        line-height:26px;
    }
    .table-base{
        width:892px;
        margin-left:40px;
        margin-top: 20px;
        cellspacing:0;
        border : 1px solid rgba(248,248,249,1);


    }
    .table-base-cf{
        width:892px;
        margin-left:40px;
        margin-top: 20px;
        border : 1px solid white;;
        cellspacing:0;

    }
    th {
        width:223px;
        height:50px;
        background:rgba(248,248,249,1);
        border : 1px solid rgba(248,248,249,1);

        font-size:16px;
        font-family:SourceHanSansCN-Regular;
        font-weight:400;
        color:rgba(102,102,102,1);
        line-height:26px;
        align:center;
    }
    td{
        width:223px;
        height:46.5px;
        border : 1px solid rgba(248,248,249,1);
        /*width:892px;
        height:50px;
        border :1px solid #f8f8f9;
        font-size:12px;
        text-align :center;*/
    }
    .row-type{
        height:62px;
    }
    .row-type-2{
        height:104px;
    }
    .row-type-sxxw{
        margin-top: 31px;
        height:19px;
    }
    .row-type-yxxw{
        margin-top: 20px;
        height:16px;
    }
    .input-type{
        width:280px;
        height:42px;
        padding:0px 10px;
        background:rgba(255,255,255,1);
        border:1px solid rgba(231,231,231,1);
    }
    .input-type-other{
        width:775px;

    }
    .input-type-2{
        width:774px;
        height:84px;
    }
    h4{
        width:160px;
        height:26px;
        margin-top:30px;
        margin-left:406px;
        font-size:26px;
        font-family:SourceHanSansCN-Regular;
        font-weight:bold;
        color:rgba(153,153,153,1);
        line-height:26px;
    }
    .row-type1 {
        margin-top:30px;
    }
    .table-input{
        width:223px;
        height:46.5px;
        border:none;
        padding: 0px 10px;;

    }
    .table-input1{
        width:446px;
        height:46.5px;
        border:none;
        padding: 0px 10px;;
    }
    .input-width{
        width:280px;

    }
    .review-info{

        width:974px;
        height:100px;
        position: absolute;
        margin:3265px 162px 0px 230px;
        background:rgba(255,255,255,1);
        box-shadow:0px 0px 20px 0px rgba(0, 0, 0, 0.03);
        border-radius:6px;

    }
    .row-type-Review{
        margin-top: 15px;
    }

</style>