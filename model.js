var model = {
	// 32 x 64
	w_0 : [[-1.92575008e-01, -2.37341031e-01, -8.20208713e-02, -1.93573162e-01, -3.04130882e-01,  1.63516939e+00,  2.77724773e-01, -2.00472072e-01,  1.76352069e-01, -1.84398770e-01, -8.76356959e-02, -5.10641523e-02,  2.88589835e-01,  4.34785783e-02,  3.48312140e-01,  2.36262798e-01,  1.44173488e-01, -1.95937663e-01,  3.33949924e-02, -1.19983464e-01,  1.62430152e-01, -1.23879761e-01, -1.44289091e-01,  1.25103831e-01,  7.36963600e-02, -9.22037065e-02, -8.30046311e-02,  1.55230805e-01,  7.28013515e-02, -6.77257702e-02,  2.19567984e-01,  2.75051713e-01],
	 [-4.74099442e-02, -2.76802450e-01, -2.91048169e-01, -2.53078520e-01,  3.63585874e-02,  1.89655340e+00,  4.76913340e-03, -1.70543894e-01, -1.89736336e-01,  7.54511505e-02,  2.89015681e-01,  2.36385837e-01,  1.20716363e-01,  1.32107204e-02,  3.84319201e-02,  2.21285909e-01,  1.95272326e-01,  7.65660107e-02, -1.15510873e-01,  1.27080113e-01, -6.42896667e-02, -1.20293163e-01, -1.12897575e-01, -2.35082671e-01,  2.33741596e-01,  2.54423231e-01, -1.39189959e-01, -1.84445456e-01,  1.67697534e-01,  1.72349691e-01,  4.76644235e-03, -3.88113149e-02],
	 [-2.08533287e-01, -1.94089697e-03, -6.17594458e-02,  1.60668105e-01, -5.99494204e-02,  2.36819148e+00, -2.28706360e-01,  2.57017016e-01,  8.05086195e-02,  1.91412553e-01, -1.93204030e-01, -3.17518651e-01,  1.20058686e-01,  2.18113393e-01,  2.47183785e-01, -1.80501230e-02,  1.77268252e-01, -3.21653485e-02, -2.92231351e-01, -2.95826405e-01, -2.37136185e-01,  1.28490657e-01, -4.14810441e-02, -7.24838451e-02,  3.04575890e-01, -1.52966246e-01,  1.32580131e-01, -4.60792668e-02, -1.54874802e-01, -1.35107115e-01,  2.57652313e-01, -6.70943260e-02],
	 [-3.14936787e-01,  6.67913780e-02,  1.42734155e-01,  1.25152573e-01,  5.88761503e-03,  1.84747171e+00,  9.37962532e-02, -2.27374770e-02,  7.11684078e-02,  2.02251524e-01,  1.13045670e-01,  1.63962200e-01,  5.75739682e-01,  2.14681011e-02,  3.25580686e-01, -1.56481519e-01, -1.59127280e-01,  3.33233899e-03, -1.41678780e-01,  1.00633567e-02,  5.23491111e-03,  1.19191334e-01, -1.88883454e-01,  2.00873315e-01,  3.14481378e-01,  1.80409744e-01,  1.55671775e-01, -2.32014194e-01, -2.64449745e-01,  2.78108642e-02, -2.67885685e-01, -2.59280831e-01],
	 [-1.04818054e-01, -1.40352875e-01,  2.45306209e-01, -8.06868821e-02,  2.60369182e-01,  2.14814663e+00,  1.56028658e-01, -1.35252938e-01,  1.96598306e-01,  3.55234593e-01, -1.39607936e-01,  2.60954827e-01,  5.38686991e-01, -2.44896546e-01,  1.15290925e-01,  1.45758957e-01,  2.18269765e-01, -2.41225719e-01,  2.12087154e-01, -2.60519236e-01,  2.28442391e-03,  2.06624255e-01,  1.64986536e-01,  1.74236327e-01,  1.02977425e-01, -1.91268489e-01,  8.76114443e-02,  2.16508687e-01, -1.04769967e-01,  2.13179812e-01,  2.85067379e-01,  1.62462085e-01],
	 [-2.18106002e-01, -2.04960212e-01, -9.69937630e-03,  1.93982646e-02,  1.07146567e-02,  2.07569742e+00, -8.30286741e-02, -1.65891573e-01, -1.54782325e-01, -1.22279435e-01, -3.67727652e-02,  1.59061864e-01,  4.57416266e-01, -1.86861381e-01, -1.20928176e-01,  1.58695340e-01,  2.97895104e-01, -2.96384156e-01, -2.01642402e-02, -1.07363127e-02, -8.59485716e-02,  2.33577237e-01,  1.23312980e-01, -1.14238814e-01,  1.00161582e-01, -2.66338978e-03, -3.27283412e-01,  6.91705495e-02, -3.13451886e-01, -2.18297727e-02, -1.65699585e-03,  7.88369775e-02],
	 [ 3.45546156e-02, -1.03655547e-01, -3.11614722e-01, -2.36367896e-01, -1.37278810e-01,  2.44007778e+00,  9.79504436e-02,  4.19040248e-02,  8.67279395e-02, -6.79312795e-02,  1.78101093e-01, -3.09311926e-01,  2.04240873e-01, -2.49109492e-01, -1.74910337e-01, -2.53648758e-01,  1.27549216e-01,  3.69366817e-02,  3.78014781e-02, -3.06536304e-03,  2.70184726e-01,  2.49818787e-01,  1.20767415e-01,  1.07361272e-01,  1.48377076e-01, -2.50904381e-01, -1.38349980e-01, -2.05193628e-02,  1.44439548e-01, -1.76345229e-01,  2.39437236e-03, -2.49255851e-01],
	 [ 2.09290981e-01, -4.83009638e-03, -2.35628530e-01,  6.74243420e-02,  2.20507607e-01,  2.14125872e+00, -1.52206674e-01,  5.72716147e-02, -1.09452717e-01, -1.45921066e-01,  2.81357110e-01,  1.34686539e-02,  4.27554131e-01, -1.03590712e-02,  3.40204895e-01, -2.41521984e-01,  9.28182155e-02, -1.84775695e-01, -1.78159446e-01,  6.99309781e-02, -1.93833202e-01,  2.63809234e-01, -1.51932091e-01,  2.27567583e-01,  2.02317849e-01,  5.10993265e-02,  2.45818093e-01,  2.12219208e-01, -2.18811020e-01, -1.57843009e-01, -4.27016197e-03,  2.48906657e-01],
	 [ 2.36785963e-01, -2.37803578e-01, -3.04840714e-01, -1.10390894e-01, -1.20527595e-01,  1.44159365e+00, -2.95772761e-01, -2.21255779e-01,  2.64359623e-01, -1.52335897e-01, -1.86628446e-01, -1.55730784e-01,  2.17710882e-01,  1.55166492e-01,  3.32437247e-01,  2.75224864e-01, -2.31535673e-01, -8.90965760e-02,  1.96917728e-01, -1.72792077e-02, -5.90858422e-02, -1.28740638e-01, -8.84648263e-02,  1.01977520e-01, -2.37314761e-01,  1.83105409e-01,  4.26445231e-02, -2.91478783e-01,  2.11698636e-01,  2.80201137e-01,  3.50746736e-02, -1.94548383e-01],
	 [-2.15100855e-01,  1.27024785e-01, -1.28052128e-03,  1.98884964e-01, -1.27255902e-01,  2.20426631e+00,  8.98476094e-02,  2.66621381e-01,  2.94028431e-01,  3.50110471e-01,  6.62907958e-02, -1.83512092e-01,  4.10503209e-01, -2.99961507e-01,  9.55441073e-02, -2.78883517e-01, -1.61927193e-01,  1.48359165e-01, -1.36472479e-01, -2.95579940e-01,  2.12446317e-01, -2.44092047e-01,  3.28194559e-01,  1.25552982e-01,  2.63503402e-01,  1.36958957e-01,  1.18250899e-01,  6.38292581e-02,  1.50427982e-01, -1.85628623e-01,  7.17980340e-02, -6.63227886e-02],
	 [ 7.07198456e-02, -2.20790848e-01, -1.62216816e-02, -3.18090152e-03, -1.61654755e-01,  2.32626939e+00,  2.52653778e-01, -2.09940404e-01,  3.20651412e-01, -1.65118232e-01, -6.38858834e-03, -2.31294781e-01,  4.74206507e-01, -2.47203797e-01,  8.51268098e-02,  2.54022598e-01, -1.25897616e-01,  2.37327561e-01, -1.23674221e-01, -1.94049299e-01,  7.62562528e-02, -8.38588253e-02, -4.37479131e-02,  2.41882518e-01,  3.63727510e-01,  1.74523279e-01,  2.53248334e-01, -1.49837151e-01, -1.03403226e-01, -6.60529584e-02,  2.10281704e-02, -2.57568896e-01],
	 [ 2.21257471e-02,  3.10045891e-02, -1.58275232e-01, -1.12991937e-01, -2.86221474e-01,  2.59522128e+00, -9.98868346e-02, -4.58230823e-02,  2.25356240e-02,  2.27756515e-01, -2.25709677e-01, -2.48728842e-01,  6.33164227e-01, -8.38014334e-02,  3.95815372e-01,  1.25710130e-01, -1.18302971e-01, -6.81627169e-02, -1.76334441e-01, -6.37918115e-02, -2.39763349e-01,  2.77032226e-01,  1.37919709e-01,  7.47047318e-03, -1.30483462e-02,  4.02179128e-03, -2.01968759e-01,  2.51382321e-01, -1.03156336e-01,  9.68624428e-02,  3.06209680e-02, -1.46550760e-01],
	 [-2.15110611e-02, -8.55726749e-02,  1.24619789e-01, -2.49620169e-01,  2.40213946e-01,  6.32301867e-01, -2.28726253e-01, -2.10930511e-01,  1.17054753e-01,  4.75409329e-02,  1.89710915e-01,  2.67217252e-02,  2.12071121e-01, -2.92098463e-01,  5.90270311e-02,  1.75519109e-01, -1.41940620e-02, -9.57565233e-02,  3.83580439e-02, -9.52118561e-02, -1.73485860e-01,  5.67275733e-02, -1.86565265e-01, -1.80265024e-01, -2.74516195e-02,  2.25396585e-02,  2.50210971e-01,  1.83284990e-02,  7.77919441e-02,  1.28622368e-01, -2.89863646e-01,  2.34557509e-01],
	 [-2.16942623e-01, -2.16423348e-01,  2.83099353e-01, -2.39894196e-01, -1.64055571e-01,  1.25323021e+00, -1.49888292e-01,  2.50655383e-01,  1.78957939e-01, -2.17622751e-03,  2.50019819e-01,  7.62076154e-02,  3.47801857e-02,  7.34142438e-02,  3.45874757e-01,  7.23885670e-02, -1.99740112e-01,  2.56989673e-02,  2.88363159e-01, -2.13939905e-01, -1.29741490e-01, -5.10371197e-03,  1.83552876e-01, -1.81889370e-01,  5.23981303e-02,  1.16925210e-01, -7.28658214e-02,  2.79499561e-01,  2.00194344e-01,  2.46766537e-01, -2.51644284e-01, -1.56346828e-01],
	 [-1.64724395e-01,  7.16539547e-02, -2.70374030e-01,  1.86406225e-02,  1.16792880e-02,  6.45635784e-01,  2.02815577e-01, -7.54152760e-02,  2.15109363e-01,  2.86180317e-01,  1.70406103e-01,  2.38108292e-01,  3.19200426e-01,  1.10731363e-01,  1.56583264e-01, -1.55326009e-01,  1.63224116e-01,  1.63143486e-01, -3.88654768e-02, -4.37352285e-02, -2.27263287e-01, -3.22057635e-01, -1.85946688e-01,  1.69344693e-01,  1.06907383e-01, -1.91148713e-01, -3.07256401e-01,  2.22290903e-01, -2.63693660e-01, -8.68544653e-02, -2.92878240e-01,  7.15906098e-02],
	 [-2.80243456e-01,  2.45114177e-01, -1.71749368e-02, -1.24110430e-01,  1.06943078e-01,  9.58592534e-01, -6.84033111e-02,  1.49630979e-01,  1.71065122e-01,  1.09700800e-03,  2.65059531e-01, -1.95792407e-01,  3.62312645e-01,  9.20431390e-02, -2.06648663e-01,  1.66257784e-01, -1.98903143e-01,  2.20932409e-01,  9.28504914e-02,  1.05349146e-01,  4.94250543e-02, -9.52982623e-03,  7.71906525e-02, -2.63576955e-01, -2.97392644e-02, -2.69333959e-01, -2.57005781e-01,  3.39481272e-02, -1.67348385e-01, -7.08990172e-02,  2.33174145e-01,  4.34534810e-02],
	 [-1.20441541e-01, -1.58074468e-01, -2.53815889e-01, -2.01039404e-01,  1.37271611e-02, -8.44888568e-01,  3.07123456e-02,  1.11787416e-01, -1.69970393e-01,  6.82149604e-02,  2.03786910e-01, -5.59830852e-02, -3.20291147e-02,  2.82002360e-01, -2.34209254e-01, -2.90876806e-01, -2.36616790e-01, -1.16276056e-01,  2.91990399e-01, -2.51656890e-01, -6.72325343e-02,  2.10224837e-02,  5.97288273e-02,  2.43913326e-02,  1.16089755e-03, -1.07855750e-02, -1.36271074e-01, -2.28249505e-01,  3.08632404e-02,  2.82650925e-02,  1.83290377e-01,  1.13589726e-01],
	 [ 1.37428537e-01, -9.13230404e-02,  1.50772214e-01,  2.17667088e-01, -2.31971815e-01, -5.12323558e-01, -8.10338408e-02,  1.64374873e-01, -5.03125489e-02,  4.76407334e-02, -6.20940477e-02, -2.27644652e-01, -3.12171280e-01,  1.53913349e-01,  1.91614598e-01,  5.61317168e-02, -8.73092649e-05, -7.92256892e-02, -1.42822117e-01,  1.23183981e-01, -5.66739254e-02,  3.34401503e-02, -3.05844843e-01,  2.16934174e-01,  2.14513943e-01,  2.42501900e-01, -1.87709630e-01, -1.35070056e-01,  6.38124198e-02,  1.86913863e-01,  2.23376118e-02, -1.22048952e-01],
	 [-3.17191817e-02, -8.70822743e-03, -5.13956212e-02,  1.74461573e-01, -1.44366056e-01, -1.04995513e+00,  1.83267698e-01, -2.43913502e-01, -3.27190965e-01,  9.87406150e-02, -1.14294127e-01, -1.84264421e-01, -3.43671411e-01,  1.73943967e-01,  1.36079818e-01,  4.58370661e-03,  9.85077545e-02,  1.83994204e-01, -1.99765459e-01, -1.61834389e-01, -2.19011202e-01,  2.83859055e-02, -1.43472657e-01,  8.35702475e-03,  1.38273006e-02,  8.67778659e-02,  1.99043155e-02, -9.54247341e-02,  9.55471992e-02, -1.03647918e-01,  2.38457382e-01, -2.06353307e-01],
	 [ 3.25801075e-02, -1.76588282e-01, -1.36768937e-01,  1.71794891e-01, -2.14438275e-01, -6.54433429e-01,  2.72511929e-01, -2.68614650e-01, -2.77208090e-01,  6.92506880e-02,  9.82507914e-02, -8.70392937e-03, -1.01519868e-01,  1.66651085e-01,  5.44450693e-02,  4.94111404e-02,  1.61645234e-01, -3.13486159e-01, -2.03114655e-03, -1.48557751e-02,  2.89700121e-01,  2.21344784e-01,  2.31462851e-01,  1.38816729e-01,  1.38324335e-01,  1.92942113e-01, -1.45808622e-01,  2.99344689e-01,  4.74081971e-02,  3.37070413e-02, -1.76254287e-01, -3.12480778e-01],
	 [ 8.85022357e-02, -8.41941591e-03, -2.56720632e-02, -1.87208980e-01, -1.40307933e-01, -1.82774317e+00,  6.49006069e-02, -1.00887641e-01, -2.68948048e-01, -3.06913078e-01, -2.81402797e-01,  2.49221668e-01, -5.87278247e-01,  7.11425021e-02, -3.88985462e-02,  1.25250727e-01,  2.02654719e-01, -2.27681145e-01,  8.05249438e-03,  9.29613709e-02, -2.94515997e-01, -2.62449533e-01, -1.83148205e-01,  1.21191092e-01, -1.23332366e-02, -1.06992193e-01,  1.15064913e-02,  2.30733886e-01,  3.07539284e-01, -4.31004204e-02, -2.40938872e-01, -8.45367536e-02],
	 [-1.97161421e-01, -5.94106875e-03,  1.20529935e-01, -1.70447215e-01,  2.55532801e-01, -1.88427699e+00,  1.51337549e-01, -2.12971300e-01,  1.10554673e-01, -8.53107721e-02, -7.28260577e-02, -1.55936763e-01,  2.79765297e-02,  2.76629120e-01,  1.58080846e-01,  1.73760414e-01,  1.31433010e-01, -7.51016438e-02,  1.81616202e-01, -1.85991600e-01, -6.05179220e-02,  8.22305456e-02, -3.36728632e-01,  3.04220080e-01, -2.35454123e-02, -2.00141788e-01,  2.15005845e-01, -2.07967967e-01, -2.56173700e-01, -1.64686620e-01, -1.90157130e-01, -2.33151793e-01],
	 [-2.06426904e-01, -1.19063839e-01,  1.85766995e-01, -1.46028563e-01,  2.54797697e-01, -1.24964392e+00,  1.48818910e-01, -8.43114182e-02, -1.79947197e-01, -4.46173139e-02, -9.67340842e-02,  2.66868919e-01, -3.50792646e-01, -1.39451632e-02,  4.95742187e-02, -2.07556665e-01,  8.44598413e-02, -2.22569481e-01,  2.65504383e-02,  9.19729918e-02, -2.78587729e-01,  7.10854977e-02, -1.98689178e-01,  1.97536573e-01,  6.15582690e-02,  2.55477786e-01,  1.78658769e-01, -2.25511655e-01, -1.62480503e-01,  2.28298247e-01, -1.57257453e-01, -1.69118777e-01],
	 [ 4.22311649e-02, -2.15589255e-01, -2.69801140e-01,  7.84785450e-02, -4.80943732e-02, -1.01836693e+00, -2.73162305e-01, -1.78619593e-01, -1.15141250e-01, -2.84596086e-01, -1.52683690e-01, -2.59535700e-01, -4.71292943e-01,  1.41797706e-01,  9.31594074e-02, -7.27696866e-02, -2.46183127e-02, -2.66607851e-01, -2.51749396e-01,  2.83536702e-01, -9.40949097e-02,  5.15319407e-02, -2.83446580e-01,  2.85947531e-01, -2.43009463e-01, -5.31237163e-02, -2.50829846e-01,  5.31899324e-03, -1.32392094e-01,  2.15089232e-01, -9.22829062e-02,  1.20527938e-01],
	 [ 1.35321975e-01, -1.87508300e-01, -2.17990026e-01, -1.22513831e-01,  6.17363155e-02, -2.19162416e+00,  1.79932117e-01, -1.81876212e-01, -1.93246841e-01, -2.66355090e-03, -4.96543534e-02, -1.47630900e-01, -4.56662357e-01, -4.80639711e-02, -3.22893150e-02,  4.60737087e-02,  1.20584145e-01,  2.43870810e-01,  2.93925762e-01, -1.34512901e-01,  2.27763280e-01,  2.77338326e-01, -2.56861240e-01, -1.19216904e-01, -7.39860907e-02,  3.03638637e-01,  3.37884009e-01, -1.98025867e-01,  1.57067433e-01, -2.48849958e-01,  5.81241325e-02, -2.60688782e-01],
	 [ 4.58046272e-02,  7.13997558e-02,  8.28138068e-02, -2.31169999e-01, -1.65906355e-01, -2.01880550e+00,  7.04893097e-02, -3.25070679e-01, -2.02777669e-01, -2.50596464e-01,  2.11170055e-02, -8.97201449e-02, -5.80117762e-01,  2.42327258e-01, -1.22004069e-01, -8.34440663e-02,  2.80922651e-01, -1.92727551e-01,  3.33333090e-02,  1.66763347e-02, -1.95391208e-01, -1.46938175e-01,  1.53193876e-01,  2.88564384e-01,  7.27614835e-02,  3.04335713e-01,  2.10267276e-01,  1.37395874e-01, -2.47648209e-01, -3.32299210e-02,  2.01099321e-01,  8.25005770e-02],
	 [ 3.00428301e-01,  2.86886603e-01,  2.26235822e-01,  2.25303665e-01, -3.85132171e-02, -1.76329279e+00, -8.74530226e-02, -1.61106080e-01,  2.21369982e-01, -3.33000213e-01,  2.85544217e-01,  2.04343855e-01, -5.20271361e-01, -8.79424363e-02, -3.37369502e-01,  2.75421202e-01, -1.16367608e-01,  6.78828582e-02,  1.93273112e-01,  9.28390697e-02,  3.09379250e-02, -1.82322487e-01, -2.68008620e-01,  2.43224546e-01,  8.04458112e-02, -2.76551574e-01, -1.58066064e-01,  2.34191850e-01,  1.72902420e-01,  1.00188278e-01,  3.01029414e-01, -1.01452127e-01],
	 [ 3.74643989e-02, -2.97667012e-02, -1.29930988e-01, -2.88468599e-01, -1.80959076e-01, -2.07068276e+00, -1.34262219e-01, -3.24299723e-01,  6.75907591e-03,  2.30145290e-01,  2.27222353e-01, -2.57248874e-03, -4.40584123e-01,  9.19051394e-02, -3.69865745e-01,  1.44267276e-01, -3.06973487e-01,  1.29267722e-01, -7.87464455e-02, -1.32287040e-01,  1.59380138e-02,  2.28687793e-01,  3.43302488e-02, -1.16735741e-01, -1.23770811e-01,  6.56155050e-02,  1.97055370e-01,  2.49647021e-01,  2.62811184e-01, -1.64679304e-01,  3.16224881e-02, -7.15312287e-02],
	 [-1.45565197e-01, -2.24639270e-02, -4.08741906e-02,  9.34658572e-02,  3.68096456e-02, -2.00934434e+00,  3.06537122e-01, -2.91110396e-01, -1.97184876e-01, -8.15247819e-02,  3.51332799e-02,  1.93766385e-01, -4.27808791e-01,  1.18144318e-01,  1.57389805e-01,  9.35192332e-02,  2.97859980e-04,  1.27948493e-01,  8.79910961e-02, -3.70219946e-02,  2.86724389e-01, -1.43448323e-01, -3.27952176e-01, -9.17794108e-02,  6.61405325e-02,  3.05565625e-01,  8.88088569e-02,  1.11482032e-01, -4.55207080e-02,  8.88951495e-03,  3.01349133e-01, -1.29732639e-01],
	 [ 1.47826290e-02, -1.52108073e-02, -3.21185775e-02,  6.43558754e-03,  2.70093143e-01, -1.96206117e+00,  2.86805388e-02,  5.87830655e-02, -1.65469255e-02,  1.00005798e-01,  1.24461755e-01, -2.33774304e-01, -3.50884944e-01,  1.87375084e-01, -2.47908860e-01, -1.61988199e-01,  1.42188683e-01,  1.61215708e-01,  1.88868880e-01,  4.78058644e-02, -4.93270196e-02,  1.68289289e-01,  2.43338391e-01,  2.73328032e-02,  3.80659625e-02, -1.74114704e-01, -2.68895119e-01, -2.68315732e-01, -1.44189015e-01, -9.12606120e-02, -2.85858065e-01,  1.82150111e-01],
	 [-1.08909108e-01,  2.34919563e-01, -2.75162965e-01, -7.00332299e-02,  1.70964032e-01, -1.86730564e+00, -1.30315751e-01, -2.73709893e-02, -9.44597200e-02,  1.17902219e-01,  1.35965124e-01,  2.11566567e-01, -4.68688339e-01, -2.14874879e-01,  8.71722475e-02,  9.32579115e-03, -8.90483409e-02, -1.63233936e-01,  1.71754345e-01,  1.49532244e-01, -2.45149106e-01, -1.68784689e-02, -6.85835350e-03, -9.22703966e-02,  2.08655745e-01,  2.12543015e-03, -1.37105599e-01,  6.94815516e-02,  4.61639725e-02, -1.54782727e-01,  2.03488842e-01, -2.44492024e-01],
	 [-2.64438055e-02,  2.63359815e-01, -2.27322385e-01, -1.49730161e-01,  2.46055648e-01, -1.56537592e+00,  2.23760530e-01, -2.79440939e-01,  2.02252284e-01, -1.76258720e-02, -8.60319883e-02,  2.54875511e-01, -1.53612494e-02,  7.13562220e-02, -5.94247766e-02, -8.09222013e-02, -2.41543338e-01, -4.24377620e-03, -8.84547755e-02,  1.62403628e-01,  2.51816183e-01,  3.38978576e-03,  3.43414098e-02,  3.13872188e-01,  1.09573089e-01, -2.08833784e-01, -2.31991366e-01,  1.96401209e-01, -1.36653408e-01,  9.12672281e-02,  1.66473344e-01,  6.42120391e-02]],
	 bias_0 : [-0.00388126,  0.01693392, -0.02807201,  0.02199024, -0.00783658,  2.2052896 , -0.01656772,  0.06474226,  0.06877589,  0.052036  , -0.00316438, -0.00936948,  0.29122695,  0.00429332,  0.08397127,  0.00930747,  0.00968082,  0.00721201,  0.00744203,  0.01451613,  0.00425011, -0.01181201,  0.04614772, -0.01162483,  0.06870628, -0.02405904, -0.03560668,  0.00898285, -0.03409672,  0.03212973,  0.00345148,  0.00434341],
	// 64 x 32
	w_1 : [[-4.09981251e-17,  3.77535036e-34, -2.19970548e-18, -6.29741854e-19, -3.37740971e-34, -5.55809123e-19,  5.55616185e-34,  1.82774715e-33, -8.51483386e-19,  2.61027750e-34,  5.56165775e-34, -9.70228430e-18, -9.65179981e-18, -3.22984039e-16,  2.73061988e-34, -1.04812839e-34],
	 [ 2.02582674e-18,  3.55596868e-34,  1.08693355e-19,  3.11172422e-20,  3.69323737e-35,  2.74640216e-20,  5.52717099e-35,  1.83848841e-33,  4.20740830e-20,  1.79621632e-34,  4.59292964e-34,  4.79415944e-19,  4.76921425e-19,  1.59595152e-17,  2.82864922e-34, -3.01261340e-34],
	 [-5.08133675e-17,  1.85853977e-33, -2.72633188e-18, -7.80506740e-19,  2.83856516e-34, -6.88873998e-19,  1.71536493e-34,  1.84437360e-33, -1.05533481e-18,  4.38151514e-34,  1.82652280e-33, -1.20250836e-17, -1.19625115e-17, -4.00309041e-16,  3.26805613e-34, -1.47678733e-34],
	 [ 9.39476667e-18, -1.85435795e-33,  5.04065099e-19,  1.44306078e-19,  3.62892945e-34,  1.27364269e-19,  2.64513963e-34,  1.83128887e-33,  1.95118400e-19,  3.66461443e-34, -3.65720801e-35,  2.22329047e-18,  2.21172173e-18,  7.40121971e-17, -1.89576847e-35, -7.14757274e-35],
	 [-7.25939744e-18, -3.37252566e-34, -3.89494535e-19, -1.11506247e-19,  1.06019075e-34, -9.84152222e-20, -5.83491427e-34,  1.84432658e-33, -1.50769293e-19, -5.40243245e-34, -3.43820871e-34, -1.71795073e-18, -1.70901170e-18, -5.71896992e-17,  1.34516640e-34, -2.98348869e-34],
	 [ 2.88150423e-15, -1.84155939e-33,  1.54603670e-16,  4.42606578e-17,  2.57464120e-34,  3.90643654e-17, -5.86084402e-34,  1.82677314e-33,  5.98454850e-17, -3.06612617e-34, -3.41273790e-34,  6.81913297e-16,  6.78365076e-16,  2.27005474e-14,  5.58229812e-35, -1.35868057e-34],
	 [ 1.49108189e-17,  1.85410669e-33,  8.00022360e-19,  2.29034111e-19, -2.97626991e-35,  2.02145131e-19, -7.05360321e-36,  1.84608118e-33,  3.09680524e-19, -1.16450497e-34, -5.53851979e-34,  3.52867557e-18,  3.51031381e-18,  1.17467734e-16, -5.60232802e-34,  4.56731947e-34],
	 [ 5.71598479e-17,  1.83112651e-33,  3.06684491e-18,  8.77990699e-19,  3.28301883e-35,  7.74912983e-19, -3.69855270e-34,  1.84118874e-33,  1.18714428e-18, -6.44276113e-35,  4.10251248e-34,  1.35269954e-17,  1.34566040e-17,  4.50306749e-16, -5.35796122e-36,  1.72780806e-34],
	 [ 7.55649342e-17,  1.85358029e-33,  4.05434802e-18,  1.16069746e-18, -3.21922766e-34,  1.02442927e-18,  5.22997089e-34,  1.82834518e-33,  1.56939654e-18, -7.85465210e-35,  1.82643959e-33,  1.78825877e-17,  1.77895382e-17,  5.95302326e-16, -5.36461643e-34, -3.32590675e-34],
	 [ 6.25958341e-17,  1.84122694e-33,  3.35850673e-18,  9.61488688e-19,  2.12872729e-34,  8.48608054e-19,  2.35034976e-34,  1.82375304e-33,  1.30004317e-18, -1.22095866e-34,  1.85046174e-33,  1.48134267e-17,  1.47363467e-17,  4.93131570e-16, -2.57894392e-34,  4.89591055e-34],
	 [ 1.65251612e-17,  1.85154227e-33,  8.86638458e-19,  2.53830943e-19, -5.48321141e-34,  2.24030754e-19,  2.96092724e-34,  1.85119936e-33,  3.43208610e-19, -4.15702098e-34,  1.84593498e-33,  3.91071307e-18,  3.89036525e-18,  1.30185682e-16, -3.25427575e-34,  5.41530732e-34],
	 [-3.40876726e-18,  1.64230669e-34, -1.82893485e-19, -5.23595860e-20,  2.67839258e-35, -4.62124773e-20, -5.63250114e-35, -1.82589703e-33, -7.07961785e-20,  1.26950233e-34,  2.28097240e-34, -8.06691762e-19, -8.02494079e-19, -2.68543524e-17, -6.68812377e-36, -1.83268420e-34],
	 [ 5.40286689e-16,  1.85353602e-33,  2.89884486e-17,  8.29894592e-18, -1.84274076e-33,  7.32463800e-18, -1.82221057e-33,  1.82562115e-33,  1.12211269e-17, -1.84374287e-33, -1.82333721e-33,  1.27859901e-16,  1.27194597e-16,  4.25639181e-15,  1.08633781e-34, -1.85560893e-33],
	 [-1.26673082e-17,  5.87791624e-34, -6.79649642e-19, -1.94573327e-19,  1.25730749e-34, -1.71729998e-19, -2.98304283e-34,  1.83112008e-33, -2.63085414e-19,  3.66741128e-34, -5.47425148e-34, -2.99774431e-18, -2.98214596e-18, -9.97933918e-17, -1.27797875e-34,  1.43586291e-35],
	 [ 2.12035309e-16,  1.84711984e-33,  1.13765070e-17,  3.25691840e-18, -3.82355596e-34,  2.87455044e-18,  4.34562996e-34,  1.85066084e-33,  4.40372884e-18, -3.95581997e-34, -1.82190990e-33,  5.01785660e-17,  4.99174714e-17,  1.67041906e-15,  1.05232217e-34, -5.21344280e-34],
	 [-2.47852710e-17, -1.82983108e-33, -1.32982498e-18, -3.80708352e-19, -2.25252750e-34, -3.36012630e-19, -3.45237387e-34,  1.84423198e-33, -5.14761526e-19, -1.34148035e-34,  1.83732136e-33, -5.86548313e-18, -5.83496306e-18, -1.95259001e-16,  2.42837342e-34, -7.18984806e-35],
	 [ 5.28604344e-17,  1.83409647e-33,  2.83616492e-18,  8.11950408e-19,  2.63741076e-34,  7.16625907e-19, -4.30126194e-34,  1.83956215e-33,  1.09785024e-18,  3.73123947e-34,  1.85373714e-33,  1.25095277e-17,  1.24444385e-17,  4.16435781e-16, -2.26661002e-34,  3.48861377e-34],
	 [-1.61604109e-17, -1.82673512e-33, -8.67067830e-19, -2.48228242e-19,  3.46138822e-34, -2.19085816e-19,  2.22734943e-34,  1.84174545e-33, -3.35632980e-19,  3.49149281e-34, -3.90919233e-34, -3.82439305e-18, -3.80449315e-18, -1.27312096e-16,  4.22901358e-34, -2.05924776e-34],
	 [-4.82369845e-17, -1.12848456e-34, -2.58809924e-18, -7.40932972e-19, -4.24964855e-34, -6.53946193e-19, -4.82216665e-34, -1.85818969e-33, -1.00182677e-18, -4.62615985e-34,  2.47593273e-34, -1.14153737e-17, -1.13559796e-17, -3.80012253e-16,  1.09128223e-34,  2.55827542e-34],
	 [-8.32865494e-18, -5.23666088e-36, -4.46864215e-19, -1.27930358e-19,  4.41842199e-34, -1.12911123e-19,  6.56251175e-35,  1.84286106e-33, -1.72976598e-19, -2.13871118e-34, -1.24235564e-34, -1.97099252e-18, -1.96073714e-18, -6.56133691e-17,  2.62485363e-34, -1.12552402e-34],
	 [-3.89063574e-17,  1.84583231e-33, -2.08747506e-18, -5.97612040e-19, -3.42798099e-34, -5.27451407e-19, -4.11695177e-34,  1.83724661e-33, -8.08040325e-19, -8.93924022e-35,  1.85461197e-33, -9.20726882e-18, -9.15936017e-18, -3.06505225e-16, -3.23956991e-34, -2.95176458e-34],
	 [ 3.80862641e-17,  1.82209926e-33,  2.04347402e-18,  5.85015113e-19,  3.23366971e-34,  5.16333221e-19, -4.53174103e-34,  1.82704167e-33,  7.91007746e-19, -2.80946318e-34,  1.82723066e-33,  9.01318991e-18,  8.96629125e-18,  3.00044481e-16,  4.21173886e-34,  1.84316890e-33],
	 [ 1.25589509e-17,  1.84454165e-33,  6.73835854e-19,  1.92908807e-19, -1.75224193e-34,  1.70260951e-19, -3.29529844e-34,  1.83854076e-33,  2.60834863e-19, -2.94724099e-35, -1.84133696e-33,  2.97210089e-18,  2.95663530e-18,  9.89397150e-17,  6.61420251e-35,  1.20200359e-34],
	 [ 3.84171628e-17, -1.82628696e-33,  2.06122821e-18,  5.90097776e-19, -4.73618039e-35,  5.20819332e-19,  6.52507731e-35,  1.85821706e-33,  7.97880117e-19,  3.83058115e-34, -2.24417438e-34,  9.09149744e-18,  9.04419264e-18,  3.02651384e-16, -5.57710402e-34,  3.42849458e-34],
	 [ 1.67656408e-16, -1.84356636e-33,  8.99540718e-18,  2.57524693e-18,  2.43911335e-34,  2.27290807e-18,  8.51576321e-35,  1.84395758e-33,  3.48202878e-18, -3.89951769e-35, -1.82636851e-33,  3.96762111e-17,  3.94697700e-17,  1.32080113e-15, -4.50300662e-34,  2.54619285e-34],
	 [-1.58711359e-17,  1.84197981e-33, -8.51547234e-19, -2.43784887e-19,  1.54708109e-34, -2.15164088e-19, -2.88124846e-34,  1.85578030e-33, -3.29625141e-19, -2.45129281e-34,  3.40206777e-34, -3.75593517e-18, -3.73639220e-18, -1.25033220e-16,  3.87811933e-34, -5.03894618e-34],
	 [-8.48491349e-18, -1.83862451e-33, -4.55248001e-19, -1.30330539e-19,  5.80940374e-34, -1.15029507e-19,  5.21391484e-34,  1.83002650e-33, -1.76221847e-19, -2.54841344e-34, -1.82197418e-33, -2.00797204e-18, -1.99752413e-18, -6.68443660e-17, -3.56328268e-34, -1.40965202e-34],
	 [ 2.98083695e-18,  1.85179923e-33,  1.59933303e-19,  4.57864438e-20, -5.54752886e-34,  4.04110396e-20, -1.83404646e-34,  1.83727471e-33,  6.19085235e-20,  3.31937105e-34,  3.45438553e-34,  7.05420919e-19,  7.01750512e-19,  2.34831001e-17,  1.64588518e-34,  9.90096736e-35],
	 [-6.81522776e-17, -1.83587312e-33, -3.65663089e-18, -1.04683749e-18,  2.79568786e-34, -9.23936653e-19, -3.42461200e-34,  1.83362701e-33, -1.41544468e-18, -2.21923966e-34,  1.42711638e-34, -1.61283709e-17, -1.60444501e-17, -5.36905386e-16,  2.80091490e-34, -3.44675836e-34],
	 [-9.22641143e-18,  1.84992799e-33, -4.95032338e-19, -1.41720131e-19,  5.43809722e-34, -1.25081897e-19,  9.69288420e-35,  1.85167893e-33, -1.91621908e-19, -1.33279627e-34, -3.69635530e-34, -2.18344828e-18, -2.17208654e-18, -7.26858824e-17,  4.82657246e-34,  1.29424408e-34],
	 [-1.92063563e-17,  1.84377997e-33, -1.03049437e-18, -2.95014715e-19,  2.90935127e-34, -2.60379474e-19, -2.90237912e-34,  1.83474244e-33, -3.98893788e-19,  1.59896986e-34,  1.85231975e-33, -4.54522139e-18, -4.52157189e-18, -1.51308169e-16,  1.01719934e-34, -3.36409465e-35],
	 [-2.92105466e-17,  1.82998334e-33, -1.56725776e-18, -4.48681686e-19, -2.09100195e-34, -3.96005661e-19, -4.05574892e-34,  1.84772118e-33, -6.06669306e-19,  1.82305619e-33, -1.82323619e-33, -6.91273266e-18, -6.87676354e-18, -2.30121329e-16,  3.60345406e-34,  1.82263870e-33]],
	bias_1 : [ 4.3029645e-01, -7.0501948e-03,  2.3087058e-02,  6.6094678e-03, -1.0952693e-02,  5.8335057e-03, -6.3919928e-03, -1.2834437e-02,  8.9367619e-03, -1.5040172e-03, -1.5773119e-02,  1.0183048e-01,  1.0130062e-01,  3.3898857e+00, -2.0741448e-02, -1.4358243e-02],
	// 32 x 16
	w_2 : [[ 2.52082261e-34, -4.83094934e-34, -6.13385694e-35, -1.24463586e-35,  1.05104192e-09,  6.19975404e-10, -1.85029441e-33,  1.84565415e-33],
	 [ 3.86818824e-34, -1.84233319e-33,  2.24901411e-34, -1.84800110e-33,  1.84533621e-33,  1.85558946e-33,  1.83517388e-33,  1.83127804e-33],
	 [ 1.85589142e-33, -2.60532206e-34, -5.73103776e-35,  1.82323821e-33,  5.63924255e-11,  3.32640825e-11, -1.84595849e-33,  1.85791143e-33],
	 [ 1.84236515e-33, -1.85188758e-33, -5.54836869e-34,  1.85463952e-33,  1.61442856e-11,  9.52298830e-12, -1.84565158e-33,  1.83444618e-33],
	 [-5.39748251e-34, -5.25239529e-34, -1.41703892e-34, -2.53862194e-34, -2.22143958e-34,  3.02227495e-34, -3.82472962e-34, -3.77838139e-34],
	 [-1.83362701e-33,  1.75168747e-34,  3.34494724e-36,  1.82919613e-33,  1.42489059e-11,  8.40497290e-12,  1.85332241e-33,  1.84570190e-33],
	 [ 2.56315579e-34,  2.90540969e-34,  1.32314861e-34, -1.17335103e-34, -4.13172305e-34,  2.20752490e-34, -1.79185081e-34,  2.68321073e-34],
	 [-5.70508321e-34,  5.41982517e-34, -5.26019947e-34, -5.85245622e-34,  1.85128569e-33,  1.82900346e-33, -1.85653298e-33,  1.83816037e-33],
	 [-6.42931469e-35, -2.91678811e-34,  1.97686030e-34,  3.60418621e-35,  2.18289206e-11,  1.28761828e-11, -1.47775105e-33,  1.84483443e-33],
	 [-3.30276926e-34,  2.25744116e-34,  5.68547128e-34, -3.83929932e-34, -4.05434155e-34, -3.41644645e-34, -2.81261819e-34,  3.83848841e-34],
	 [-2.30971812e-35,  4.82885090e-34, -2.57772457e-34,  2.93756980e-34, -1.53122684e-34,  1.65839834e-34, -2.70902683e-34,  3.03521802e-34],
	 [-1.83083447e-33,  1.84752153e-33, -3.55761483e-34, -1.83579010e-33,  2.48731119e-10,  1.46718471e-10, -1.85397040e-33,  1.83800829e-33],
	 [-1.83085725e-33, -1.82676653e-33,  4.81178373e-34, -1.82666367e-33,  2.47436821e-10,  1.45954943e-10, -1.84085079e-33,  1.85705204e-33],
	 [-2.55065262e-34,  3.50731308e-34,  8.86395061e-35,  3.63596910e-34,  8.28013125e-09,  4.88418461e-09,  1.82916582e-33,  1.83547529e-33],
	 [ 2.87605723e-34,  1.87470181e-34,  2.89821255e-34,  5.57734279e-34, -4.83175611e-34,  8.70846508e-35, -9.97146029e-35, -3.57040338e-34],
	 [ 1.56117560e-35,  3.26904635e-34, -2.74791985e-34, -3.93862974e-34,  1.58476463e-34, -1.83737151e-33,  3.43159977e-34, -1.83383786e-33]],
	bias_2 : [-1.5888350e-02, -6.5301284e-02, -2.9391311e-24, -3.2020643e-02,  3.0808127e-01,  1.8172041e-01, -3.0840278e-02, -3.5161238e-02],
	// 16 x 8
	w_3 : [[-2.9490462e-34, -1.8560782e-33, -2.9796341e-34, -1.8247258e-33],
	 [-2.5358866e-34,  2.3650131e-34, -2.0111441e-34, -1.8442158e-33],
	 [-1.7753596e-34,  4.8095586e-34,  3.7998479e-34, -1.8909369e-34],
	 [-2.7467758e-34,  1.8571441e-33,  1.8288506e-33,  1.8468392e-33],
	 [-2.7841618e-34,  1.8344576e-33, -1.8303775e-33, -3.4222176e-05],
	 [ 3.3075883e-34, -1.8474021e-33,  1.8411393e-33, -2.0186406e-05],
	 [-1.2467898e-34,  1.8378151e-33, -1.8388712e-33, -1.8338588e-33],
	 [-1.0901183e-34, -3.3027266e-34,  2.6858914e-34,  1.8338230e-33]],
	bias_3 : [-0.00574344, -0.03118718, -0.08369866,  0.7906226 ],
	// 8 x 1
	w_4 : [[ 1.3866329e-34],
	 [-1.8232096e-33],
	 [-1.8478562e-33],
	 [-3.2876404e-03]],
	bias_4 : [-5.1377916]
};