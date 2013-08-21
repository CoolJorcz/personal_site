get '/register' do
	erb :register
end

get '/sign-out' do
	session.clear
	redirect('/')
end

post '/sign-in' do
	@user = User.find_by_email(params[:email])
	current_user = @user.id
	redirect('/')
end

post '/register' do
	user = User.create(params[:user])
	session[:user_id] = @user.id
	redirect('/')
end