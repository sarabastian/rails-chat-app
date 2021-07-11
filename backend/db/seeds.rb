# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all()
Message.destroy_all()
Conversation.destroy_all()

u1 = User.create(username: 'sb', password: '123', full_name: 'Sara Bastian', patient: true, patient_partner: false)
u2 = User.create(username: 'sm', password: '12', full_name: 'Sienna Mori', patient: false, patient_partner: true)

c1 = Conversation.create(subject_line: 'Upcoming Surgery')

m1 = Message.create(body: 'Hi there', conversation_id: c1.id, user_id: u1.id)