require 'rails_helper'

RSpec.describe User, type: :model do
  example = {username: 'anastassia', email: 'test', password: 'topsecret'}

  describe 'password encryption' do
    it 'does not save passwords to the database' do
      User.create!(example)
      user = User.find_by_username('anastassia')
      expect(user.password).not_to be('topsecret')
    end

    it 'encrypts the password using BCrypt' do
      expect(BCrypt::Password).to receive(:create)
      User.new(example)
    end
  end

  describe 'session token' do
    it 'assigns a session_token if one is not given' do
      anastassia = User.create(example)
      expect(anastassia.session_token).not_to be_nil
    end
  end
end
