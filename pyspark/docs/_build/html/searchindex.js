Search.setIndex({docnames:["dataset","index","models","models.lenet","nn","optim","util"],envversion:50,filenames:["dataset.rst","index.rst","models.rst","models.lenet.rst","nn.rst","optim.rst","util.rst"],objects:{"":{dataset:[0,0,0,"-"],models:[2,0,0,"-"],nn:[4,0,0,"-"],optim:[5,0,0,"-"],util:[6,0,0,"-"]},"dataset.base":{Progbar:[0,1,1,""],display_table:[0,3,1,""],maybe_download:[0,3,1,""],urlretrieve:[0,3,1,""]},"dataset.base.Progbar":{add:[0,2,1,""],update:[0,2,1,""]},"dataset.mnist":{extract_images:[0,3,1,""],extract_labels:[0,3,1,""],read_data_sets:[0,3,1,""]},"dataset.news20":{download_glove_w2v:[0,3,1,""],download_news20:[0,3,1,""],get_glove_w2v:[0,3,1,""],get_news20:[0,3,1,""]},"dataset.transformer":{normalizer:[0,3,1,""]},"models.lenet":{lenet5:[3,0,0,"-"]},"models.lenet.lenet5":{build_model:[3,3,1,""],get_minst:[3,3,1,""]},"nn.criterion":{AbsCriterion:[4,1,1,""],BCECriterion:[4,1,1,""],ClassNLLCriterion:[4,1,1,""],ClassSimplexCriterion:[4,1,1,""],CosineEmbeddingCriterion:[4,1,1,""],Criterion:[4,1,1,""],CrossEntropyCriterion:[4,1,1,""],DistKLDivCriterion:[4,1,1,""],HingeEmbeddingCriterion:[4,1,1,""],L1HingeEmbeddingCriterion:[4,1,1,""],MSECriterion:[4,1,1,""],MarginCriterion:[4,1,1,""],MarginRankingCriterion:[4,1,1,""],MultiCriterion:[4,1,1,""],MultiLabelMarginCriterion:[4,1,1,""],MultiLabelSoftMarginCriterion:[4,1,1,""],MultiMarginCriterion:[4,1,1,""],ParallelCriterion:[4,1,1,""],SmoothL1Criterion:[4,1,1,""],SmoothL1CriterionWithWeights:[4,1,1,""],SoftMarginCriterion:[4,1,1,""],SoftmaxWithCriterion:[4,1,1,""],TimeDistributedCriterion:[4,1,1,""]},"nn.criterion.Criterion":{backward:[4,2,1,""],forward:[4,2,1,""],of:[4,4,1,""]},"nn.layer":{Abs:[4,1,1,""],Add:[4,1,1,""],AddConstant:[4,1,1,""],BatchNormalization:[4,1,1,""],BiRecurrent:[4,1,1,""],Bilinear:[4,1,1,""],Bottle:[4,1,1,""],CAdd:[4,1,1,""],CAddTable:[4,1,1,""],CDivTable:[4,1,1,""],CMaxTable:[4,1,1,""],CMinTable:[4,1,1,""],CMul:[4,1,1,""],CMulTable:[4,1,1,""],CSubTable:[4,1,1,""],Clamp:[4,1,1,""],Concat:[4,1,1,""],ConcatTable:[4,1,1,""],Container:[4,1,1,""],Contiguous:[4,1,1,""],Cosine:[4,1,1,""],CosineDistance:[4,1,1,""],CriterionTable:[4,1,1,""],DiceCoefficientCriterion:[4,1,1,""],DotProduct:[4,1,1,""],Dropout:[4,1,1,""],ELU:[4,1,1,""],Echo:[4,1,1,""],Euclidean:[4,1,1,""],Exp:[4,1,1,""],FlattenTable:[4,1,1,""],GRU:[4,1,1,""],GradientReversal:[4,1,1,""],Graph:[4,1,1,""],HardShrink:[4,1,1,""],HardTanh:[4,1,1,""],Identity:[4,1,1,""],Index:[4,1,1,""],InferReshape:[4,1,1,""],JoinTable:[4,1,1,""],L1Cost:[4,1,1,""],L1Penalty:[4,1,1,""],LSTM:[4,1,1,""],LSTMPeephole:[4,1,1,""],LeakyReLU:[4,1,1,""],Linear:[4,1,1,""],Log:[4,1,1,""],LogSigmoid:[4,1,1,""],LogSoftMax:[4,1,1,""],LookupTable:[4,1,1,""],MM:[4,1,1,""],MV:[4,1,1,""],MapTable:[4,1,1,""],MaskedSelect:[4,1,1,""],Max:[4,1,1,""],Mean:[4,1,1,""],Min:[4,1,1,""],MixtureTable:[4,1,1,""],Model:[4,1,1,""],Mul:[4,1,1,""],MulConstant:[4,1,1,""],Narrow:[4,1,1,""],NarrowTable:[4,1,1,""],Normalize:[4,1,1,""],PReLU:[4,1,1,""],Padding:[4,1,1,""],PairwiseDistance:[4,1,1,""],ParallelTable:[4,1,1,""],Power:[4,1,1,""],RReLU:[4,1,1,""],ReLU6:[4,1,1,""],ReLU:[4,1,1,""],Recurrent:[4,1,1,""],Replicate:[4,1,1,""],Reshape:[4,1,1,""],Reverse:[4,1,1,""],RnnCell:[4,1,1,""],RoiPooling:[4,1,1,""],Scale:[4,1,1,""],Select:[4,1,1,""],SelectTable:[4,1,1,""],Sequential:[4,1,1,""],Sigmoid:[4,1,1,""],SoftMax:[4,1,1,""],SoftMin:[4,1,1,""],SoftPlus:[4,1,1,""],SoftShrink:[4,1,1,""],SoftSign:[4,1,1,""],SpatialAveragePooling:[4,1,1,""],SpatialBatchNormalization:[4,1,1,""],SpatialContrastiveNormalization:[4,1,1,""],SpatialConvolution:[4,1,1,""],SpatialConvolutionMap:[4,1,1,""],SpatialCrossMapLRN:[4,1,1,""],SpatialDilatedConvolution:[4,1,1,""],SpatialDivisiveNormalization:[4,1,1,""],SpatialFullConvolution:[4,1,1,""],SpatialMaxPooling:[4,1,1,""],SpatialShareConvolution:[4,1,1,""],SpatialSubtractiveNormalization:[4,1,1,""],SpatialZeroPadding:[4,1,1,""],SplitTable:[4,1,1,""],Sqrt:[4,1,1,""],Square:[4,1,1,""],Squeeze:[4,1,1,""],Sum:[4,1,1,""],Tanh:[4,1,1,""],TanhShrink:[4,1,1,""],Threshold:[4,1,1,""],TimeDistributed:[4,1,1,""],Transpose:[4,1,1,""],Unsqueeze:[4,1,1,""],View:[4,1,1,""],VolumetricConvolution:[4,1,1,""],VolumetricMaxPooling:[4,1,1,""]},"nn.layer.Container":{add:[4,2,1,""]},"nn.layer.Model":{backward:[4,2,1,""],check_input:[4,5,1,""],convert_output:[4,5,1,""],forward:[4,2,1,""],get_dtype:[4,2,1,""],get_weights:[4,2,1,""],load:[4,5,1,""],load_caffe:[4,5,1,""],load_torch:[4,5,1,""],name:[4,2,1,""],of:[4,4,1,""],parameters:[4,2,1,""],predict:[4,2,1,""],reset:[4,2,1,""],set_name:[4,2,1,""],set_seed:[4,2,1,""],set_weights:[4,2,1,""],test:[4,2,1,""]},"optim.optimizer":{EveryEpoch:[5,1,1,""],MaxEpoch:[5,1,1,""],MaxIteration:[5,1,1,""],MultiStep:[5,1,1,""],Optimizer:[5,1,1,""],Poly:[5,1,1,""],SeveralIteration:[5,1,1,""],Step:[5,1,1,""],TrainSummary:[5,1,1,""],ValidationSummary:[5,1,1,""]},"optim.optimizer.Optimizer":{optimize:[5,2,1,""],prepare_input:[5,2,1,""],set_checkpoint:[5,2,1,""],set_model:[5,2,1,""],set_train_summary:[5,2,1,""],set_val_summary:[5,2,1,""],set_validation:[5,2,1,""]},"optim.optimizer.TrainSummary":{read_scalar:[5,2,1,""],set_summary_trigger:[5,2,1,""]},"optim.optimizer.ValidationSummary":{read_scalar:[5,2,1,""]},"util.common":{JTensor:[6,1,1,""],JavaCreator:[6,1,1,""],JavaValue:[6,1,1,""],RNG:[6,1,1,""],Sample:[6,1,1,""],SingletonMixin:[6,1,1,""],TestResult:[6,1,1,""],callBigDlFunc:[6,3,1,""],callJavaFunc:[6,3,1,""],create_spark_conf:[6,3,1,""],get_bigdl_conf:[6,3,1,""],init_engine:[6,3,1,""]},"util.common.JTensor":{flatten_ndarray:[6,4,1,""],from_ndarray:[6,4,1,""],to_ndarray:[6,2,1,""]},"util.common.JavaCreator":{get_creator_class:[6,4,1,""],set_creator_class:[6,4,1,""]},"util.common.JavaValue":{jvm_class_constructor:[6,2,1,""]},"util.common.RNG":{set_seed:[6,2,1,""],uniform:[6,2,1,""]},"util.common.Sample":{from_ndarray:[6,4,1,""]},"util.common.SingletonMixin":{instance:[6,4,1,""]},dataset:{base:[0,0,0,"-"],mnist:[0,0,0,"-"],news20:[0,0,0,"-"],transformer:[0,0,0,"-"]},models:{lenet:[3,0,0,"-"]},nn:{criterion:[4,0,0,"-"],layer:[4,0,0,"-"]},optim:{optimizer:[5,0,0,"-"]},util:{common:[6,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","function","Python function"],"4":["py","classmethod","Python class method"],"5":["py","staticmethod","Python static method"]},objtypes:{"0":"py:module","1":"py:class","2":"py:method","3":"py:function","4":"py:classmethod","5":"py:staticmethod"},terms:{"04069v1":4,"1e5":4,"1st":4,"2nd":4,"3rd":4,"5778v1":4,"7976931348623157e":4,"case":[4,5],"class":[0,4,5,6],"default":[4,5],"float":[4,5,6],"function":[4,5,6],"import":[4,6],"long":4,"new":[0,4,5],"public":5,"return":[0,3,4,5,6],"short":4,"static":4,"true":[4,5,6],"try":4,"while":[4,5],Abs:4,ECE:4,For:[4,5],NOT:[4,5],That:4,The:[0,4,5],Then:4,There:4,Use:[4,5],a_ndarrai:6,abl:4,about:4,aboutrnn:4,abs:4,abscriterion:4,absolut:4,acceler:4,accept:4,accord:4,accur:4,accuraci:5,accurai:5,across:4,action:[4,5],activ:4,actual:4,add:[0,4],addconst:4,added:4,adding:4,addit:4,adj_h:4,adj_w:4,adjh:4,adjw:4,adversari:4,affin:4,aggreg:4,all:[4,6],alloc:4,alloptimmethod:5,allow:[4,5],along:4,alpha:4,also:[4,5],ani:[4,5],api:6,app_nam:5,appli:4,applic:4,approxim:4,arbitrarili:4,architectur:4,arg:[0,4,6],argument:4,arrai:[0,4,5,6],array_from_tensor:6,arxiv:4,asr:4,asru2015:4,assign:4,assum:4,assumpt:4,astyp:[4,6],attribut:5,automat:3,averag:[0,4],avoid:4,axi:4,back:4,backward:4,bar:0,base:[1,4,5,6],base_lr:5,basic:4,batch:[4,5],batch_mod:4,batch_siz:[4,5],batchnorm:[4,5],batchsiz:4,bcecriterion:4,becom:4,been:4,befor:4,behav:4,being:4,believ:4,below:4,benchmark:[4,6],berkelei:4,bernoulli:4,beta:4,between:4,bia:[4,5],bias:5,bias_r:4,bidirect:4,big:5,bigdl:4,bigdl_typ:[4,5,6],bilinear:4,binari:4,birecurr:4,blob:4,blueprint:4,bobby_paper1:4,both:4,bottl:4,bottom:4,boundari:4,build_model:3,bytestream:0,cadd:4,caddtabl:4,caff:4,calcul:[4,5],call:[4,5,6],callbigdlfunc:6,calljavafunc:6,can:[0,4,5],cclass:6,cdd:4,cdivtabl:4,cec:4,ceil:4,ceil_mod:4,ceilmod:4,cell:4,center:4,chang:[4,5],channel:4,check:5,check_input:4,checkpoint:5,checkpoint_path:5,checkpoint_trigg:5,chosen:4,christian:4,clamp:4,class_num:3,classif:4,classmethod:[4,6],classnllcriterion:4,classsimplexcriterion:4,clevert:4,clone:4,cmaxtabl:4,cmintabl:4,cmul:4,cmultabl:4,cnn:4,code:4,coeffici:[4,5],collect:4,column:4,com:4,combin:4,come:4,common:[1,4,5],commonli:4,compar:4,compat:5,complex:4,compon:4,compos:4,comput:4,concat:4,concaten:4,concatet:4,concatt:4,confer:4,configur:5,conn_tabl:4,connect:4,consid:4,considereda:4,consist:4,constant:4,constant_scalar:4,construct:4,constructor:4,contain:[4,5],content:1,context:4,contigu:4,contrast:4,control:4,conv:4,convert:[4,6],convert_output:4,convinput:4,convolut:4,copi:4,corner:4,correl:4,correspond:[4,5],cosin:4,cosinedist:4,cosineembeddingcriterion:4,could:5,count:[4,5],count_include_pad:4,countincludepad:4,cours:4,covari:4,creat:[4,5],create_spark_conf:6,createab:4,createabscriterion:4,createadd:4,createaddconst:4,createbatchnorm:4,createbcecriterion:4,createbilinear:4,createbirecurr:4,createbottl:4,createcadd:4,createcaddt:4,createcdivt:4,createclamp:4,createclassnllcriterion:4,createclasssimplexcriterion:4,createcmaxt:4,createcmint:4,createcmul:4,createcmult:4,createconcat:4,createconcatt:4,createcontigu:4,createcosin:4,createcosinedist:4,createcosineembeddingcriterion:4,createcriteriont:4,createcrossentropycriterion:4,createcsubt:4,createdicecoefficientcriterion:4,createdistkldivcriterion:4,createdotproduct:4,createdropout:4,createecho:4,createelu:4,createeuclidean:4,createeveryepoch:5,createexp:4,createflattent:4,creategradientrevers:4,creategru:4,createhardshrink:4,createhardtanh:4,createhingeembeddingcriterion:4,createident:4,createindex:4,createinferreshap:4,createjoint:4,createl1cost:4,createl1hingeembeddingcriterion:4,createl1penalti:4,createleakyrelu:4,createlinear:4,createlog:4,createlogsigmoid:4,createlogsoftmax:4,createlookupt:4,createlstm:4,createlstmpeephol:4,createmapt:4,createmargincriterion:4,createmarginrankingcriterion:4,createmaskedselect:4,createmax:4,createmaxepoch:5,createmaxiter:5,createmean:4,createmin:4,createmixturet:4,createmm:4,createmsecriterion:4,createmul:4,createmulconst:4,createmulticriterion:4,createmultilabelmargincriterion:4,createmultilabelsoftmargincriterion:4,createmultimargincriterion:4,createmultistep:5,createmv:4,createnarrow:4,createnarrowt:4,createnorm:4,createpad:4,createpairwisedist:4,createparallelcriterion:4,createparallelt:4,createpoli:5,createpow:4,createprelu:4,createrecurr:4,createrelu6:4,createrelu:4,createrepl:4,createreshap:4,createrevers:4,creaternncel:4,createroipool:4,createrrelu:4,createscal:4,createselect:4,createselectt:4,createsequenti:4,createseveraliter:5,createsigmoid:4,createsmoothl1criterion:4,createsmoothl1criterionwithweight:4,createsoftmargincriterion:4,createsoftmax:4,createsoftmaxwithcriterion:4,createsoftmin:4,createsoftplu:4,createsoftshrink:4,createsoftsign:4,createspatialaveragepool:4,createspatialbatchnorm:4,createspatialcontrastivenorm:4,createspatialconvolut:4,createspatialconvolutionmap:4,createspatialcrossmaplrn:4,createspatialdilatedconvolut:4,createspatialdivisivenorm:4,createspatialfullconvolut:4,createspatialmaxpool:4,createspatialshareconvolut:4,createspatialsubtractivenorm:4,createspatialzeropad:4,createsplitt:4,createsqrt:4,createsquar:4,createsqueez:4,createstep:5,createsum:4,createtanh:4,createtanhshrink:4,createthreshold:4,createtimedistribut:4,createtimedistributedcriterion:4,createtranspos:4,createunsqueez:4,createview:4,createvolumetricconvolut:4,createvolumetricmaxpool:4,criterion:[1,5],criteriont:4,crop:4,cross:4,crossentropycriterion:4,csubtabl:4,current:0,d_h:4,d_i:4,d_t:4,d_w:4,darrel:4,data:[0,3,4,5,6],data_back:6,data_rdd:4,data_typ:[0,3],dataset:[1,5],debug:4,decai:[4,5],declar:4,deconvolut:4,decreas:4,deep:4,defin:[4,5],definit:4,defpath:4,delet:4,depth:[0,4],descent:4,describ:4,dest_dir:0,detail:[4,5],deviat:[0,4],dice:4,dicecoefficientcriterion:4,dict:[0,4],differ:4,dilat:4,dilation_h:4,dilation_w:4,dilationh:4,dilationw:4,dim:[0,4],dimens:[0,4],dimension:4,dimensionwould:4,directli:[4,5],directori:0,disabl:4,displai:0,display_t:0,dissimilar:4,distanc:4,distkldivcriterion:4,distribut:4,diverg:4,divid:4,divis:4,doc:5,doe:[0,4],doesn:[3,4],doing:4,domain:4,don:4,done:4,dot:4,dotproduct:4,doubl:4,download:[0,3],download_glove_w2v:0,download_news20:0,drawn:4,drop:4,dropout:4,dtxdwxdh:4,dtype:4,dure:[4,5],dwxdh:4,dynam:4,each:[4,5],easi:6,echo:4,edu:4,eec:4,effect:[4,5],effici:4,either:[0,4],element:4,elementwis:4,elu:4,embed:4,empir:4,empti:0,enabl:[4,5],encapsul:4,end_trigg:5,entropi:4,epoch:5,eps:4,epsilon:4,equal:4,equival:4,err:4,error:4,etc:5,euclidean:4,evalu:4,everi:[4,5],everyepoch:5,exampl:4,except:4,exclud:4,exist:5,exp:4,expand:4,expect:4,expert:4,explod:4,expon:4,exponenti:4,extent:4,extra:4,extract:0,extract_imag:0,extract_label:0,f_i:4,facil:5,factor:4,fail:4,fall:4,fals:[0,4],fast:4,fast_backward:4,fastlstm:4,featur:[0,4,6],features_shap:6,fed:4,feed:4,field:4,file:[0,4],filenam:0,finish:5,first:4,fix:4,flatten:6,flatten_ndarrai:6,flattent:4,float32:[4,6],floor:[4,5],follow:[4,5],forc:0,form:4,format:5,forward:4,four:4,fraction:4,framework:4,from:[0,4,6],from_ndarrai:6,full:4,fulli:4,func:6,further:4,gamma:[4,5],gate:4,gater:4,gaussian:4,gener:[4,5,6],get:[3,4],get_bigdl_conf:6,get_creator_class:6,get_dtyp:4,get_glove_w2v:0,get_minst:3,get_news20:0,get_weight:4,girshick:4,github:4,give:4,given:4,glove:0,grad_output:4,gradbia:[4,5],gradient:4,gradientrevers:4,gradinput:4,gradloss:4,gradoutput:4,gradweight:[4,5],graph:4,greater:4,grid:4,ground:4,group:4,gru:4,grulstm:4,gzip:0,half:4,handl:4,hard:4,hardshrink:4,hardtanh:4,has:4,have:4,height:4,help:4,here:4,hidden:4,hidden_s:4,hiddens:4,higher:4,hing:4,hingeembeddingcriterion:4,hochreit:4,how:[4,5],howev:4,http:4,hyper:4,ident:4,ieee:4,ignor:4,ignore_label:4,ignorelabel:4,illegalargumentexcept:4,imag:[0,4],implement:4,includ:4,incom:4,incorrect:4,increas:4,independ:4,index:[0,1,4],indic:[4,5],infer:4,inferreshap:4,inform:[4,5],init:4,init_engin:6,init_method:4,init_p:4,initi:4,initializationmethod:4,initmethod:4,initp:4,inlin:4,inplac:4,input:[4,5],input_dim:4,input_s:4,input_size1:4,input_size2:4,inputcan:4,inputdim:4,inputdimension1:4,inputdimension2:4,inputs:4,insan:4,insert:4,insid:4,instanc:[4,6],instead:4,intend:4,interest:4,intern:4,interpol:4,intersect:4,interv:[0,5],introduc:5,invok:4,ioff:4,isn:4,isoverwrit:5,itamar:4,iter:5,its:[4,5],itself:4,java:[4,6],java_except:4,javacr:6,javavalu:[4,5,6],jcriterion:4,jmodel:4,join:4,jointabl:4,jtensor:6,just:4,jvalu:[4,6],jvm_class_constructor:6,k_h:4,k_t:4,k_w:4,keep:4,kernel:4,kernel_h:4,kernel_w:4,know:5,known:4,koltun:4,ktxkwxkh:4,kullback:4,kwxkh:4,l1cost:4,l1hingeembeddingcriterion:4,l1penalti:4,l1weight:4,l_p:4,label:[0,4,6],label_shap:6,lambda:4,lang:4,larger:4,last:4,latent:4,layer:1,layernam:4,leaki:4,leakyrelu:4,learn:[4,5],learnabl:4,learningr:5,left:4,leibler:4,lenet5:[1,2],lenet:[1,2],length:4,less:4,librari:5,lie:4,like:4,likelihood:4,linear:4,list:[0,4],load:[4,5],load_caff:4,load_torch:4,local:4,locat:[3,4],log:[4,5],log_dir:5,logger:5,logist:4,logsigmoid:4,logsoftmax:4,lookupt:4,loss:[4,5],lower:4,lrn:4,lstm:4,lstmpeephol:4,lua:4,mai:5,make:4,mani:4,manner:4,map:[0,4],maptabl:4,margin:4,margincriterion:4,marginrankingcriterion:4,mask:4,maskedselect:4,master:4,match:[4,5],match_al:4,matplotlib:5,matrix:4,max:[4,5],max_epoch:5,max_i:4,max_iter:5,max_norm:4,max_valu:4,maxepoch:5,maximis:4,maxiter:5,maxvalu:4,maybe_download:0,mean:[0,4],measur:4,member:4,memori:4,merg:4,method:[4,5,6],might:4,min:4,min_valu:4,mini:4,minibatch:4,minim:5,minvalu:4,mix:4,mixtur:4,mixturet:4,mnist:[1,3],mode:4,model:[1,4,5,6],modelpath:4,modul:1,module1:4,module2:4,module3:4,momentum:4,more:4,moredetail:4,most:4,msecriterion:4,much:4,mul:4,mulconst:4,multi:4,multiclass:4,multicriterion:4,multilabel:4,multilabelmargincriterion:4,multilabelsoftmargincriterion:4,multimargincriterion:4,multinomi:4,multinomiallogisticlosslay:4,multipl:4,multipli:4,multistep:5,must:4,n_class:4,n_dim:4,n_featur:4,n_group:4,n_index:4,n_input_dim:4,n_input_plan:4,n_output:4,n_output_dim1:4,n_output_plan:4,name:[0,4,5,6],narrow:4,narrowt:4,nclass:4,ndarrai:[0,4,5,6],necesari:5,necessari:[4,5],need:[4,6],neg:4,negval:4,neighborhood:4,nelement:4,nest:4,net:5,network:[4,5],neural:[4,5],news20:1,nfeatur:4,ngroup:4,ninputdim:4,ninputplan:4,no_bia:4,nobia:4,node:4,nois:4,non:[4,5],none:[0,4],nonlinear:4,noqa:6,norm:4,norm_typ:4,normal:[0,3,4],normalize_mod:4,normalizemod:4,note:4,notebook:5,notic:4,noutputdim:4,noutputplan:4,novel:4,now:4,num:4,num_input_dim:4,number:[4,5],numer:4,numpi:[0,4,6],object:[0,4,5,6],observ:4,offset:4,often:[4,5],ofth:[4,5],oheight:4,one:4,ones:4,onli:[4,5],oper:4,optim:[1,4],optim_method:5,option:4,order:4,org:4,origin:4,other:4,otherwis:4,our:6,outlier:4,output:4,output_s:4,outputs:4,over:[4,5],overal:4,overhead:5,overwrit:5,owidth:4,packag:1,pad:4,pad_bottom:4,pad_h:4,pad_left:4,pad_right:4,pad_t:4,pad_top:4,pad_w:4,padbottom:4,padding_valu:4,padh:4,padleft:4,padright:4,padt:4,padtop:4,padw:4,page:1,pair:4,pairwis:4,pairwisedist:4,paper:4,parallel:4,parallelcriterion:4,parallelt:4,paramet:[0,3,4,5],parameternam:4,parametr:4,pars:0,part:4,partl:4,pass:[0,4,6],path:[4,5],pattern:4,pdf:4,peephol:4,penalti:4,per:4,perform:4,permut:4,pixel:4,place:4,plane:4,pleas:4,plug:4,point:4,poli:5,polici:5,polynomi:5,pool:4,pooled_h:4,pooled_w:4,pooledh:4,pooledw:4,pos:4,posit:[0,4],possibl:4,potenti:4,power:[4,5],pre:[0,4],preced:4,predict:4,prefer:4,prelu:4,prepare_input:5,preprint:4,present:3,preserv:4,prevent:4,print:4,probabl:4,problem:4,proceed:4,process:[4,5],produc:4,product:4,progbar:0,progress:0,propag:4,propagate_back:4,protocol:4,provid:4,provide_output:4,provideoutput:4,purpos:4,py4j:4,py4jjavaerror:4,python:[4,5],pythonbigdl:6,qualiti:[4,6],rais:0,random:[4,6],rang:4,rank:4,rate:5,rdd:[3,4],reach:5,read:0,read_data_set:0,read_scalar:5,reader:0,real:4,reason:4,receiveif:4,recognit:4,record:5,rectangular:4,rectifi:4,recurr:4,recurs:4,reduc:4,ref:4,refer:[4,5],regardless:4,region:4,relu6:4,relu:4,repeat:4,repeat_target:4,repeattarget:4,replac:4,replic:4,report:4,reporthook:0,repres:[0,4],requir:4,rescal:4,research:4,reset:4,reshap:4,respect:[4,5],respons:4,result:[4,6],retriev:5,reus:4,revers:4,rgb:4,right:4,rng:6,rnn:4,rnncell:4,rnndrop:4,roi:4,roipool:4,ross:4,round:4,row:[0,4],rrelu:4,rule:4,run:5,runningmean:5,runningvar:5,same:4,sampl:[3,4,6],satur:4,scala:6,scalar:4,scale:4,search:1,second:4,see:4,seed:[4,6],segment:4,select:4,selectt:4,semant:4,semi:4,sensit:4,separ:4,sepp:4,seprat:5,sequenc:4,sequenti:4,sergei:4,seri:[4,5],serveraliter:5,set:[0,4,5],set_checkpoint:5,set_creator_class:6,set_model:5,set_nam:4,set_se:[4,6],set_summary_trigg:5,set_train_summari:5,set_val_summari:5,set_valid:5,set_weight:4,setcheckpoint:5,setnuminputdim:4,settrainsummari:5,setvalid:5,setvalidationsummari:5,sever:[4,5],severaliter:5,sgd:5,shape:[4,6],share:4,sharp:4,shelham:4,shift:4,should:[4,5],should_scale_grad_by_freq:4,shown:4,shrinkag:4,side:[4,6],sigma:4,sigmoid:4,sign:4,similar:[4,5],similarli:4,simpl:4,simplex:4,simpli:4,simplic:4,sinc:4,singl:4,singleton:4,singletonmixin:6,size:[4,5,6],size_averag:4,sizeaverag:4,sizetensor:4,skip:4,slice:4,slope:4,small:4,smaller:4,smooth:4,smoothl1criterion:4,smoothl1criterionwithweight:4,snapshot:5,soft:4,softmargincriterion:4,softmax:4,softmaxlay:4,softmaxwithcriterion:4,softmin:4,softplu:4,softshrink:4,softshrinkag:4,softsign:4,some:[4,5],sometim:4,sourc:[0,3,4,5,6],source_dir:0,source_url:0,sparkcontext:3,spars:4,sparsiti:4,spatial:4,spatial_scal:4,spatialaveragepool:4,spatialbatchnorm:4,spatialcontrastivenorm:4,spatialconvolut:4,spatialconvolutionmap:4,spatialcrossmaplrn:4,spatialdilatedconvolut:4,spatialdivisivenorm:4,spatialfullconvolut:4,spatialmaxpool:4,spatialshareconvolut:4,spatialsubtractivenorm:4,spatialzeropad:4,special:4,specif:[3,4],specifi:[4,5],split:4,splittabl:4,sqrt:4,squar:4,squeez:4,stabl:4,stand:4,standard:[0,4],start:[0,4],stat:4,state:[4,5],statu:5,std:0,step:[0,4,5],step_siz:5,stepsiz:5,still:4,storag:6,store:[0,3,4,5],stride:4,stride_h:4,stride_w:4,sub:4,submodul:[1,2],subpackag:1,subsequ:4,substanti:5,subtabl:4,subtract:4,successor:4,suggest:4,sum:4,sum_:4,sum_i:4,sum_j:4,summari:5,supervis:4,suppli:4,support:[4,5],swap:4,szegedi:4,tabl:4,tabular:4,tag:5,take:4,taken:[4,5],tanh:4,tanhshrink:4,target:[0,4],task:4,tempor:4,tensor1:6,tensor:[4,6],tensorboard:5,tensorflow:5,term:4,test:[0,3,4,6],testresult:6,testtensor:6,than:4,thatinclud:5,thatshould:4,the_lambda:4,theano:4,thei:[4,5],them:[4,5],themodel:5,thenumb:4,theoret:4,theshold:4,thi:[4,5],thoma:4,those:4,thought:4,threshhold:4,threshold:4,thresval:4,through:4,throughput:5,throughputin:5,thu:4,time:[4,5],timedistribut:4,timedistributedcriterion:4,timespot:5,tmp:[0,3],to_ceil:4,to_ndarrai:6,togeth:4,token:0,top1:5,top1accuraci:[4,5],top1accuracyloss:5,top5:5,top5accuraci:[4,5],top:4,topolog:4,torch:4,total:4,total_num:6,trace:5,train:[0,3,4,5],train_dir:0,training_rdd:5,trainsummari:5,tran:4,trans_a:4,trans_b:4,transfer:4,transform:[1,4],transpos:4,tri:5,trigger:[4,5],tsmoon:4,tupl:[0,4],tutori:4,two:4,type:[4,5],typic:4,uint8:0,umbrella:5,uniform:[4,5,6],union:4,unit8:0,unit:4,unknown:4,unmatch:4,unspecifi:4,unsqueez:4,unterthin:4,upconvolut:4,updat:[0,4],upper:4,upsampl:4,url:0,urlretriev:0,use:[4,5],used:[4,5,6],useful:4,user:[4,5],uses:4,using:[4,5],usual:[4,5],util:[1,4,5],utk:4,uuid:4,val_method:[4,5],val_rdd:[4,5],valid:[4,5],validationmethod:5,validationsummari:5,valu:[0,4,5],value_for_last_step:0,valueerror:0,vari:4,variabl:4,vector:[0,4],verbos:0,veri:5,versa:4,version:4,vice:4,view:4,vision:4,visual:[0,5],volumetricconvolut:4,volumetricmaxpool:4,w_in:4,w_out:4,wallclocktim:5,want:4,web:4,weight:[4,5],well:4,when:[4,5,6],where:[4,5],whether:[4,5],which:[4,5,6],whilst:4,whose:4,width:[0,4],wildml:4,window:4,wise:4,with_bia:4,withif:4,within:4,without:4,wojzaremba:4,word2vec:0,word:[0,4],work:[4,6],work_directori:0,would:[3,4,6],wrap:4,wrapper:6,write:5,written:5,www:4,x_1:4,x_2:4,x_f:4,x_i:4,x_j:4,x_l:4,xavier:4,y_f:4,y_i:4,you:4,youdidn:5,your:4,zero:[4,5]},titles:["dataset package","Welcome to dl&#8217;s documentation!","models package","models.lenet package","nn package","optim package","util package"],titleterms:{base:0,common:6,content:[0,2,3,4,5,6],criterion:4,dataset:0,document:1,indic:1,layer:4,lenet5:3,lenet:3,mnist:0,model:[2,3],modul:[0,2,3,4,5,6],news20:0,optim:5,packag:[0,2,3,4,5,6],submodul:[0,3,4,5,6],subpackag:2,tabl:1,transform:0,util:6,welcom:1}})