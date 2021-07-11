class ApplicationController < ActionController::API
    def home
        render json: {message: 'Server is up!'}
    end
      
    def current_user
        token = request.headers['auth-key']
        begin
          
            payload = JWT.decode(token,'PatientPartner', true, algorithm: 'HS256')
          
            user = User.find_by(id: payload[0]['user_id'])
        rescue JWT::DecodeError
          nil
        end
    end
    
end
